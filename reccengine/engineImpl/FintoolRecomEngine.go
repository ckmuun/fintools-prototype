package engineImpl

import (
	"log"
	"reccengine/api"
)

/*
	Financial Tools Recommendation are generated here
*/

type FintoolRecommender interface {
	GenerateStrategyRecommendations(questionnaire api.Questionnaire)
}

type RuleBasedFintoolRecommender struct {
	strategies []api.Strategy
}

// get predefined strategy components
func init() {

	// TODO load strategies

	log.Print("init rule-based recommendation engine ")
}

func (r *RuleBasedFintoolRecommender) GenerateStrategyRecommendations(questionnaire api.Questionnaire) api.Strategy {

	// TODO implement me
	return api.Strategy{
		Components: nil,
	}
}
