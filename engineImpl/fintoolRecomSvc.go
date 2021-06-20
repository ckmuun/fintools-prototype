package engineImpl

import (
	"github.com/google/uuid"
	"reccengine/api"
	"sync"
)

var once sync.Once
var engines []FintoolRecommender

/*
	todo Initialize available Recommendation Generation Engines and populate slice
*/
func init() {

}

/*
	Generate Recommendation from filled questionnaires
todo select engine and use it
*/
func GenerateRecommendation(qs []api.McQuestionnaire) api.FintoolRecomDto {

	return api.FintoolRecomDto{
		Id:         uuid.New(),
		Strategies: nil,
	}
}
