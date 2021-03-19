package engineImpl

import (
	"github.com/emirpasic/gods/maps/treemap"
	"log"
	"reccengine/api"
)

/*
	Financial Tools Recommendation are generated here
*/

type FintoolRecommender interface {
	GenerateStrategyRecommendations(questionnaire api.McQuestionnaire) api.Strategy
	SetStrategyComponents([]api.StrategyComponent)
}

/*
	Simple, naive rule-based tool recommender
*/
type RuleBasedFintoolRecommender struct {
	strategyComponents []api.StrategyComponent
}

/*

 */
func (r *RuleBasedFintoolRecommender) GenerateStrategyRecommendations(questionnaire api.McQuestionnaire) api.Strategy {

	ranking := r.getRankedStratComps(questionnaire)

	var comps [3]api.StrategyComponent

	// This doesn't  really look like modern code
	iter := ranking.Iterator()
	_ = iter.First()
	comps[0] = iter.Value().(api.StrategyComponent)
	_ = iter.Next()
	comps[1] = iter.Value().(api.StrategyComponent)
	_ = iter.Next()
	comps[2] = iter.Value().(api.StrategyComponent)

	return api.Strategy{
		Components: comps,
	}
}

/*
	Set the pool of strategy components on the recommender instance
*/
func (r *RuleBasedFintoolRecommender) SetStrategyComponents(components []api.StrategyComponent) {

	r.strategyComponents = components
}

/*
	This simply adds the answer scores
*/
func addAnswerScoresForMcQuestionnaire(questionnaire api.McQuestionnaire) (scores api.ScoreContainer) {

	for index := range questionnaire.Questions {

		question := questionnaire.Questions[index]
		log.Print("getting scores for question:  ", question.QuestionText)

		answer := question.GetAnswer()
		scores.ExecutionComplexity += answer.Scores.ExecutionComplexity
		scores.Flexibility += answer.Scores.Flexibility
		scores.Risk += answer.Scores.Risk
		scores.Intellectual += answer.Scores.Intellectual
		scores.Time += answer.Scores.Time

	}

	return scores
}

func (r *RuleBasedFintoolRecommender) getRankedStratComps(questionnaire api.McQuestionnaire) *treemap.Map {

	log.Print("Generating rating of strategy components by simple rules")
	/*
		TODO iterate over questionnaire.
		For every answered question, increase the points that were 'get' for the respective sub-category.
		identische metriken für fragen bzw. antworten und strategiekomponenten.
		der nutzer erhält einen besimmten numerischen Wert auf seine Antworten,
		die komponenten haben einen statischen Wert, der sich aus ihrer Klassifizierung heraus ergibt.
		es werden die drei kompoenten gewählt, die am nächsten am Wert des Nutzers sind.
	*/
	log.Print("generating scores")
	scores := addAnswerScoresForMcQuestionnaire(questionnaire)

	log.Print("normalizing scores")
	// average-ize scores with questionnaire length to
	scores.ExecutionComplexity /= len(questionnaire.Questions)
	scores.Risk /= len(questionnaire.Questions)
	scores.Time /= len(questionnaire.Questions)
	scores.Intellectual /= len(questionnaire.Questions)
	scores.Flexibility /= len(questionnaire.Questions)

	log.Print("generating ranking")
	return r.rankByAbsoluteDiff(scores)
}

/*
	Naive Ranking Algorithm that just calculates the difference between the average scores
	from the questionnaire and the individual strategy component scores.
	This mostly servers as a poc
	// TODO implement a more sophisticated ranking algorithm here.
*/
func (r *RuleBasedFintoolRecommender) rankByAbsoluteDiff(stratCompScores api.ScoreContainer) *treemap.Map {
	someMap := treemap.NewWithIntComparator()

	indivScores := make([]int, len(r.strategyComponents))

	tiebreaker := 1
	for index := range r.strategyComponents {
		component := r.strategyComponents[index]

		// FIXME this just returns -50 for everything
		a := component.ScoreReqs.Time - stratCompScores.Time
		b := component.ScoreReqs.Risk - stratCompScores.Risk
		c := component.ScoreReqs.Intellectual - stratCompScores.Intellectual
		d := component.ScoreReqs.Flexibility - stratCompScores.Flexibility
		e := component.ScoreReqs.ExecutionComplexity - stratCompScores.ExecutionComplexity

		// to be minimized
		naiveScoreForStratComp := a + b + c + d + e
		indivScores[index] = naiveScoreForStratComp

		_, found := someMap.Get(naiveScoreForStratComp)

		if found {
			// +1 als tiebreaker

			naiveScoreForStratComp += tiebreaker
			tiebreaker++
		}
		someMap.Put(naiveScoreForStratComp, r.strategyComponents[index])
	}

	return someMap
}
