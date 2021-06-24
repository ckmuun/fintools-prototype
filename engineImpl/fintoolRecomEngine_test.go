package engineImpl

import (
	"github.com/magiconair/properties/assert"
	assert2 "github.com/stretchr/testify/assert"
	"log"
	"reccengine/_testUtils"
	"reccengine/api"
	"testing"
)

func TestGenerateStrategyRecommendationsPosCase(t *testing.T) {

	strategyComps := _testUtils.LoadRealStrategiesFromJson()

	recommender := RuleBasedFintoolRecommender{
		strategyComponents: strategyComps,
	}

	testQArr := _testUtils.FillQuestionnairesFromJson()

	goodStrategy, badStrategy, _, err := recommender.GenerateStrategyRecommendations(testQArr)

	assert2.Nil(t, err, "")
	assert2.NotNil(t, badStrategy, "")
	assert2.NotNil(t, goodStrategy, "")

	log.Print("goodStrategy: ", goodStrategy)
	assert.Equal(t, goodStrategy.RecommendedComponents[0], strategyComps[0])
	assert.Equal(t, goodStrategy.RecommendedComponents[1], strategyComps[2])
	assert.Equal(t, goodStrategy.RecommendedComponents[2], strategyComps[1])
}

func TestGenerateStrategyRecommendationsNegCase(t *testing.T) {

	strategyComps := _testUtils.GetTestStrategyComps()

	recommender := RuleBasedFintoolRecommender{
		strategyComponents: strategyComps,
	}

	testQuestionnaire := _testUtils.CreateTestQuestionnaire(1)
	testQArr := make([]api.McQuestionnaire, 1)
	testQArr[0] = testQuestionnaire

	goodStrategy, badStrategy, _, err := recommender.GenerateStrategyRecommendations(testQArr)

	assert2.Nil(t, err, "")
	assert2.NotNil(t, badStrategy, "")
	assert2.NotNil(t, goodStrategy, "")

	log.Print("strategy: ", goodStrategy)
	assert.Equal(t, goodStrategy.RecommendedComponents[0], strategyComps[3])
	assert.Equal(t, goodStrategy.RecommendedComponents[1], strategyComps[1])
	assert.Equal(t, goodStrategy.RecommendedComponents[2], strategyComps[2])
}
