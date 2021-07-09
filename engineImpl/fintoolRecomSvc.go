package engineImpl

import (
	"encoding/json"
	"github.com/google/uuid"
	"log"
	"reccengine/api"
	"reccengine/utils"
	"sync"
)

var once sync.Once
var engines []FintoolRecommender

func init() {

	engines = make([]FintoolRecommender, 1)
	engine := RuleBasedFintoolRecommender{
		loadStrategyComponents(),
	}

	engines[0] = &engine

}

func loadStrategyComponents() (comps []api.StrategyComponent) {
	file := utils.LoadJsonFileIntoByteArr("engineImpl/strategyComponents.json")

	_ = json.Unmarshal([]byte(file), &comps)
	log.Println(comps)
	return comps

}

/*
	This function calculates whether someone's financial health is too low to give reasonable investment advice.
*/
func CalculateTripwireFiring(financialHealthQ api.McQuestionnaire) bool {

	score, err := financialHealthQ.GetAveragedAnswers()

	if err != nil || score <= 2 {
		return false
	}
	return true
}

/*
	This function just takes a random sample from all available strategies
*/
func GenerateRandomSample() []api.StrategyComponent {
	return engines[0].GenerateRandomSample()
}

/*
	Generate GoodRecommendation from filled questionnaires
*/
func GenerateRecommendation(qs []api.McQuestionnaire) api.FintoolRecomDto {

	// TODO currently only one engine available -> decide whether an addtional one wil be required
	goodRecom, badRecom, userScores, err := engines[0].GenerateStrategyRecommendations(qs)

	if err != nil {
		panic("error during strategy recommendation")
	}

	return api.FintoolRecomDto{
		Id:                 uuid.New(),
		GoodRecommendation: goodRecom,
		BadRecommendation:  badRecom,
		UserScores:         userScores,
	}

}
