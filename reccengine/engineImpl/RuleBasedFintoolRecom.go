package engineImpl

import (
	"github.com/emirpasic/gods/maps/treemap"
	"github.com/rs/zerolog/log"
	"reccengine/api"
)

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

	for _, question := range questionnaire.Questions {

		log.Print("getting scores for question:  ", question.QuestionText)

		answer := question.GetAnswer()
		scores.ExecutionComplexity += answer.ExecutionComplexity
		scores.Flexibility += answer.Flexibility
		scores.Risk += answer.Risk
		scores.Intellectual += answer.Intellectual
		scores.Time += answer.Time

	}

	return scores
}

func (r *RuleBasedFintoolRecommender) getRankedStratComps(questionnaire api.McQuestionnaire) *treemap.Map {

	log.Print("Generating rating of strategy components by simple rules")
	/*
		For every answered question, increase the points that were 'get' for the respective sub-category.
		identische metriken für fragen bzw. antworten und strategiekomponenten.
		der nutzer erhält einen besimmten numerischen Wert auf seine Antworten,
		die komponenten haben einen statischen Wert, der sich aus ihrer Klassifizierung heraus ergibt.
		es werden die drei kompoenten gewählt, die am nächsten am Wert des Nutzers sind.
	*/
	log.Print("generating scores")
	scores := addAnswerScoresForMcQuestionnaire(questionnaire)
	r.averageIzeQScores(questionnaire, scores)

	log.Print("generating ranking")
	return r.rankByAbsoluteDiff(scores)
}

func (r *RuleBasedFintoolRecommender) averageIzeQScores(questionnaire api.McQuestionnaire, scores api.ScoreContainer) {
	log.Print("normalizing scores")
	// average-ize scores with questionnaire length to
	scores.ExecutionComplexity /= len(questionnaire.Questions)
	scores.Risk /= len(questionnaire.Questions)
	scores.Time /= len(questionnaire.Questions)
	scores.Intellectual /= len(questionnaire.Questions)
	scores.Flexibility /= len(questionnaire.Questions)
}

/*
	Naive Ranking Algorithm that just calculates the difference between the average scores
	from the questionnaire and the individual strategy component scores.
	This mostly servers as a poc
	// TODO implement a more sophisticated ranking algorithm here.
*/
func (r *RuleBasedFintoolRecommender) rankByAbsoluteDiff(questionnaireScores api.ScoreContainer) *treemap.Map {
	someMap := treemap.NewWithIntComparator()

	for index, component := range r.strategyComponents {
		log.Print("calculating score for component: ", component)

		a := component.ScoreReqs.Time - questionnaireScores.Time
		b := component.ScoreReqs.Risk - questionnaireScores.Risk
		c := component.ScoreReqs.Intellectual - questionnaireScores.Intellectual
		d := component.ScoreReqs.Flexibility - questionnaireScores.Flexibility
		e := component.ScoreReqs.ExecutionComplexity - questionnaireScores.ExecutionComplexity

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
		_, found := someMap.Get(naiveScoreForStratComp)

		for found {

			naiveScoreForStratComp += 1
			_, found = someMap.Get(naiveScoreForStratComp)
		}
		someMap.Put(naiveScoreForStratComp, r.strategyComponents[index])
	}

	return someMap
}
