package engineImpl

import (
	"reccengine/api"
)

/*
	Financial Tools GoodRecommendation are generated here
*/

type FintoolRecommender interface {
	GenerateStrategyRecommendations(questionnaires []api.McQuestionnaire) (api.FintoolRecom, api.FintoolRecom, api.ScoreContainer, error)
	SetStrategyComponents([]api.StrategyComponent)
	GenerateRandomSample() []api.StrategyComponent
}
