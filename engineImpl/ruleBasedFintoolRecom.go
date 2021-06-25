package engineImpl

import (
	"github.com/emirpasic/gods/maps/treemap"
	"github.com/rs/zerolog/log"
	"math/rand"
	"reccengine/api"
)

/*
	Simple, naive rule-based tool recommender
*/
type RuleBasedFintoolRecommender struct {
	strategyComponents []api.StrategyComponent
}

/*
	Entrypoint method
	returns GoodStrategy BadStrategy, Error
	todo add a random wildcard component
*/
func (r *RuleBasedFintoolRecommender) GenerateStrategyRecommendations(userFilledQuestionnaires []api.McQuestionnaire) (api.FintoolRecom, api.FintoolRecom, api.ScoreContainer, error) {

	scores, err := CalculateQuestionnaireScores(userFilledQuestionnaires)

	if err != nil {
		panic("error during questionnaires score calculation")
	}

	ranking := r.rankGeometrically(scores)

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

/*
	Set the pool of strategy components on the recommender instance
*/
func (r *RuleBasedFintoolRecommender) SetStrategyComponents(components []api.StrategyComponent) {

	r.strategyComponents = components
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

/*
	Naive Ranking Algorithm that just calculates the difference between the average scores
	from the questionnaire and the individual strategy component scores.
	This mostly servers as a poc
	// TODO implement a more sophisticated ranking algorithm here.
*/
func (r *RuleBasedFintoolRecommender) rankByAbsoluteDiff(questionnaireScores api.ScoreContainer) *treemap.Map {
	rankedStrategies := treemap.NewWithIntComparator()

	for index, component := range r.strategyComponents {
		log.Print("calculating score for component: ", component)

		diffs := questionnaireScores.Diff(component.ScoreContainer)

		a := diffs.FinancialKnowledge
		b := diffs.CogBiasResistance
		c := diffs.TimeFlexibility
		d := diffs.FinRiskTolerance
		e := diffs.PsyRiskTolerance

		/*
				Bei 10 AnswerScore und 10 Component Score muss hier 0 rauskommen
				Allgemein gilt -> 0 ist der optimal Wert, weil damit Fragebogen und Strategie kongruent sind!

			-> VERWENDE BETRAG DES SCORES, NICHT DEN ABSOLUTEN SCORE!
		*/

		// to be minimized
		naiveScoreForStratComp := a + b + c + d + e

		if naiveScoreForStratComp < 0 {
			naiveScoreForStratComp *= -1
		}

		log.Print("naive score for component: ", naiveScoreForStratComp)
		_, found := rankedStrategies.Get(naiveScoreForStratComp)

		for found {
			naiveScoreForStratComp += 1
			_, found = rankedStrategies.Get(naiveScoreForStratComp)
		}
		rankedStrategies.Put(naiveScoreForStratComp, r.strategyComponents[index])
	}

	return rankedStrategies
}
