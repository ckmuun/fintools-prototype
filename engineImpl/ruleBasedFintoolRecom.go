package engineImpl

import (
	"github.com/emirpasic/gods/maps/hashmap"
	"github.com/emirpasic/gods/maps/treemap"
	"github.com/rs/zerolog/log"
	"math"
	"math/rand"
	"reccengine/api"
)

/*
	Simple tool recommender
*/
type RuleBasedFintoolRecommender struct {
	strategyComponents []api.StrategyComponent
}

func (r *RuleBasedFintoolRecommender) GenerateRandomSample() []api.StrategyComponent {
	sample := make([]api.StrategyComponent, 5)

	random := rand.Intn(len(r.strategyComponents) - 5)

	for i := range sample {
		sample[i] = r.strategyComponents[random+i]
	}
	return sample
}

/*
	Entrypoint method
	returns GoodStrategy BadStrategy, Error
*/
func (r *RuleBasedFintoolRecommender) GenerateStrategyRecommendations(userFilledQuestionnaires []api.McQuestionnaire, profile api.UserProfile) (api.FintoolRecom, api.FintoolRecom, api.ScoreContainer, error) {

	scores, err := CalculateQuestionnaireScores(userFilledQuestionnaires)

	if err != nil {
		panic("error during questionnaires score calculation")
	}

	var ranking *treemap.Map

	if "default" == profile.Name {
		ranking = r.rankGeometrically(scores)
	} else {
		ranking = r.rankGeometricallyProfileBased(scores, profile)
	}

	var goodComps [3]api.StrategyComponent
	var badComps [3]api.StrategyComponent

	/*
		Here, the top three and the lowest three matching components are taken from the ranking and
		inserted into strategy objects
	*/
	// This doesn't  really look like modern code
	iter := ranking.Iterator()
	_ = iter.First()
	goodComps[0] = iter.Value().(api.StrategyComponent)
	_ = iter.Next()
	goodComps[1] = iter.Value().(api.StrategyComponent)
	_ = iter.Next()
	goodComps[2] = iter.Value().(api.StrategyComponent)

	_ = iter.Last()
	badComps[0] = iter.Value().(api.StrategyComponent)
	_ = iter.Prev()
	badComps[1] = iter.Value().(api.StrategyComponent)
	_ = iter.Prev()
	badComps[2] = iter.Value().(api.StrategyComponent)

	rankedComponents := convertTreeMapToSlice(ranking)
	println("component ranking: ", rankedComponents)

	return api.FintoolRecom{
			RecommendedComponents: goodComps,
			WildcardComponent:     r.selectRandomWildcardComponent(),
		},
		api.FintoolRecom{
			RecommendedComponents: badComps,
			WildcardComponent:     r.selectRandomWildcardComponent(),
		},
		scores,
		nil
}

func (r *RuleBasedFintoolRecommender) selectRandomWildcardComponent() api.StrategyComponent {

	random := rand.Intn(len(r.strategyComponents) - 1)

	return r.strategyComponents[random]
}

func convertTreeMapToSlice(p *treemap.Map) []api.StrategyComponent {

	iter := p.Iterator()
	iter.First()

	comps := make([]api.StrategyComponent, p.Size())

	index := 0
	for index < p.Size() {
		comps[index] = iter.Value().(api.StrategyComponent)
		index++
		iter.Next()
	}
	return comps
}

func (r *RuleBasedFintoolRecommender) rankGeometricallyProfileBased(score api.ScoreContainer, profile api.UserProfile) *treemap.Map {
	return rankGeometricallyFlex(
		score,
		filterStrategies(profile.Tags, r.strategyComponents))
}

/*
	filters components to only those that the profile allows
	Three for loops because we have multiple components, with multiple tags getting matched to one profiles multiple tags
	FIXME: do this with a hashmap, we have doubles in the resulting strategies.
*/
func filterStrategies(profileTags []string, comps []api.StrategyComponent) (filteredComps []api.StrategyComponent) {

	compMap := hashmap.New()

	for index, comp := range comps {
		for _, compTag := range comp.Tags {
			for _, profileTag := range profileTags {
				if compTag == profileTag {
					compMap.Put(index, comp)
					//		filteredComps = append(filteredComps, comp)
					continue
				}
			}
		}
	}

	for _, comp := range compMap.Values() {
		filteredComps = append(filteredComps, comp.(api.StrategyComponent))
	}
	return filteredComps
}

/*
	Set the pool of strategy components on the recommender instance
*/
func (r *RuleBasedFintoolRecommender) SetStrategyComponents(components []api.StrategyComponent) {

	r.strategyComponents = components
}
func rankGeometricallyFlex(questionnaireScores api.ScoreContainer, comps []api.StrategyComponent) *treemap.Map {
	rankedStrategies := treemap.NewWithIntComparator()

	for _, comp := range comps {

		var distance int = int(EuclideanDistance(questionnaireScores, comp.ScoreContainer))
		log.Print("distance for component: ", comp.Description, " is :", distance)

		// tie breaker
		_, found := rankedStrategies.Get(distance)
		for found {
			distance += 1
			_, found = rankedStrategies.Get(distance)
		}

		rankedStrategies.Put(distance, comp)
	}
	return rankedStrategies
}

func (r *RuleBasedFintoolRecommender) rankGeometrically(questionnaireScores api.ScoreContainer) *treemap.Map {
	rankedStrategies := treemap.NewWithIntComparator()

	for _, comp := range r.strategyComponents {

		var distance int = int(EuclideanDistance(questionnaireScores, comp.ScoreContainer))
		log.Print("distance for component: ", comp.Description, " is :", distance)

		// tie breaker
		_, found := rankedStrategies.Get(distance)
		for found {
			distance += 1
			_, found = rankedStrategies.Get(distance)
		}

		rankedStrategies.Put(distance, comp)
	}
	return rankedStrategies
}

func CalculateQuestionnaireScores(questionnaires []api.McQuestionnaire) (api.ScoreContainer, error) {

	// initialize the total score container
	totalScore := api.ScoreContainer{
		FinRiskTolerance:   0,
		PsyRiskTolerance:   0,
		TimeFlexibility:    0,
		CogBiasResistance:  0,
		FinancialKnowledge: 0,
	}

	// add scores of the individual questionnaires
	for _, questionnaire := range questionnaires {
		questionnaireScore, err := questionnaire.GetAveragedAnswers()

		if err != nil {
			return totalScore, err
		}

		switch questionnaire.Category {

		case TIME_FLEXIBILITY:
			log.Print("Adding to TIME FLEXIBILITY score")
			totalScore.TimeFlexibility += questionnaireScore
		case FINANCIAL_RISK_TOLERANCE:
			log.Print("Adding to FINANCIAL_RISK_TOLERANCE score")
			totalScore.FinRiskTolerance += questionnaireScore
		case PSYCHOLOGICAL_RISK_TOLERANCE:
			log.Print("Adding to PSYCHOLOGICAL_RISK_TOLERANCE score")
			totalScore.PsyRiskTolerance += questionnaireScore
		case FINANCIAL_KNOWLEDGE:
			log.Print("Adding to FINANCIAL_KNOWLEDGE score")
			totalScore.FinancialKnowledge += questionnaireScore
		case COGNITIVE_BIAS_RESISTANCE:
			log.Print("Adding to COGNITIVE_BIAS_RESISTANCE score")
			totalScore.CogBiasResistance += questionnaireScore
		}

	}
	return totalScore, nil
}

func EuclideanDistance(score api.ScoreContainer, another api.ScoreContainer) float64 {

	// we just pretend these slices are vectors
	vectorA := score.GetVectorArr()
	vectorB := another.GetVectorArr()

	temp := 0

	for index := range vectorA {

		p := vectorA[index]
		q := vectorB[index]

		tmp := q - p
		tmpSquared := tmp * tmp
		temp += tmpSquared
	}
	log.Print("raw temp distance: ", temp)
	sqrt := math.Sqrt(float64(temp))
	log.Print("sqrt euclid distance: ", sqrt)
	return sqrt
}
