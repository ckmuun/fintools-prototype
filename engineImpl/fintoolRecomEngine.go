package engineImpl

import (
	"reccengine/api"
)

/*
	Financial Tools Recommendation are generated here
*/

type FintoolRecommender interface {
	GenerateStrategyRecommendations(user api.User) (api.FintoolRecom, api.FintoolRecom, error)
	SetStrategyComponents([]api.StrategyComponent)
}
