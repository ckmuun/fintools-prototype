package engineImpl

import (
	"reccengine/api"
)

/*
	Financial Tools Recommendation are generated here
*/

type FintoolRecommender interface {
	GenerateStrategyRecommendations(questionnaire api.McQuestionnaire) api.Strategy
	SetStrategyComponents([]api.StrategyComponent)
}
