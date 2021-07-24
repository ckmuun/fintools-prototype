package engineImpl

import (
	"github.com/magiconair/properties/assert"
	assert2 "github.com/stretchr/testify/assert"
	"log"
	"reccengine/_testUtils"
	"reccengine/api"
	"testing"
)

/*
	This just tests if the general principle works
*/
func TestGenerateRecommendationGenerally(t *testing.T) {
	strategyComps := _testUtils.LoadRealStrategiesFromJson()

	recommender := RuleBasedFintoolRecommender{
		strategyComponents: strategyComps,
	}

	testQArr := _testUtils.FillQuestionnairesFromJson()

	goodStrategy, badStrategy, _, err := recommender.GenerateStrategyRecommendations(testQArr, api.DefaultUserProfile())

	assert2.Nil(t, err, "")
	assert2.NotNil(t, badStrategy, "")
	assert2.NotNil(t, goodStrategy, "")

	log.Print("goodStrategy: ", goodStrategy)
}

/*
	This tests the correct assignment of a set of predefined, simple demo strategies, for a 'positive case'
*/
func TestGenerateStrategyRecommendationsPosCase(t *testing.T) {

	strategyComps := _testUtils.GetTestStrategyComps()

	recommender := RuleBasedFintoolRecommender{
		strategyComponents: strategyComps,
	}

	testQArr := _testUtils.CreateTestQuestionnairesForCategories(0, CATEGORIES)

	goodStrategy, badStrategy, _, err := recommender.GenerateStrategyRecommendations(testQArr, api.DefaultUserProfile())

	assert2.Nil(t, err, "")
	assert2.NotNil(t, badStrategy, "")
	assert2.NotNil(t, goodStrategy, "")

	log.Print("strategy: ", goodStrategy)
	assert.Equal(t, goodStrategy.RecommendedComponents[0], strategyComps[0])
	assert.Equal(t, goodStrategy.RecommendedComponents[1], strategyComps[2])
	assert.Equal(t, goodStrategy.RecommendedComponents[2], strategyComps[1])
}

/*
	This tests the correct assignment of predefined simple demo strategies for a 'negative case'
*/
func TestGenerateStrategyRecommendationsNegCase(t *testing.T) {

	strategyComps := _testUtils.GetTestStrategyComps()

	recommender := RuleBasedFintoolRecommender{
		strategyComponents: strategyComps,
	}

	testQArr := _testUtils.CreateTestQuestionnairesForCategories(1, CATEGORIES)

	goodStrategy, badStrategy, _, err := recommender.GenerateStrategyRecommendations(testQArr, api.DefaultUserProfile())

	assert2.Nil(t, err, "")
	assert2.NotNil(t, badStrategy, "")
	assert2.NotNil(t, goodStrategy, "")

	log.Print("strategy: ", goodStrategy)
	assert.Equal(t, goodStrategy.RecommendedComponents[0], strategyComps[1])
	assert.Equal(t, goodStrategy.RecommendedComponents[1], strategyComps[2])
	assert.Equal(t, goodStrategy.RecommendedComponents[2], strategyComps[3])
}
