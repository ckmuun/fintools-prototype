package engineImpl

import (
	"errors"
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
	Entrypoint method
	returns GoodStrategy BadStrategy, Error
*/
func (r *RuleBasedFintoolRecommender) GenerateStrategyRecommendations(usr api.User) (api.Strategy, api.Strategy, error) {

	// Handling of unfinished questionnaires
	if !usr.AllFinished() {
		err := errors.New("can not generate strategies for user as questionnaires not finished: $usr.Id")
		log.Err(err)
		return api.Strategy{}, api.Strategy{}, err
	}

	ranking := r.getRankedStratComps(usr)

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

	return api.Strategy{
			Components: goodComps,
		},
		api.Strategy{
			Components: badComps,
		},
		nil
}

/*
	Set the pool of strategy components on the recommender instance
*/
func (r *RuleBasedFintoolRecommender) SetStrategyComponents(components []api.StrategyComponent) {

	r.strategyComponents = components
}

func (r *RuleBasedFintoolRecommender) getRankedStratComps(usr api.User) *treemap.Map {

	log.Print("Generating rating of strategy components by simple rules")
	/*
		For every answered question, increase the points that were 'get' for the respective sub-category.
		identische metriken für fragen bzw. antworten und strategiekomponenten.
		der nutzer erhält einen besimmten numerischen Wert auf seine Antworten,
		die komponenten haben einen statischen Wert, der sich aus ihrer Klassifizierung heraus ergibt.
		es werden die drei kompoenten gewählt, die am nächsten am Wert des Nutzers sind.
	*/

	scores, err := usr.CalcScores()

	if err != nil {
		log.Err(err)
	}

	log.Print("generating ranking")
	return r.rankByAbsoluteDiff(*scores)
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

		diffs := questionnaireScores.Diff(component.ScoreContainer)

		a := diffs.FinanceKnowledgeReq
		b := diffs.IntellectualReq
		c := diffs.FlexibilityReq
		d := diffs.RiskTolerance

		/*
				Bei 10 AnswerScore und 10 Component Score muss hier 0 rauskommen
				Allgemein gilt -> 0 ist der optimal Wert, weil damit Fragebogen und Strategie kongruent sind!

			-> VERWENDE BETRAG DES SCORES, NICHT DEN ABSOLUTEN SCORE!
		*/

		// to be minimized
		naiveScoreForStratComp := a + b + c + d

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
