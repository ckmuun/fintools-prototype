package engineImpl

import (
	"github.com/google/uuid"
	"github.com/magiconair/properties/assert"
	assert2 "github.com/stretchr/testify/assert"
	"log"
	"reccengine/api"
	"testing"
)

func CreateTestQuestionnaire(chosenAnswerIndex int) api.McQuestionnaire {
	questions := make([]api.McQuestion, 1)

	goodAnswer := api.TextMcAnswer{
		AnswerText: "yes",
		Value:      10,
	}
	badAnswer := api.TextMcAnswer{
		AnswerText: "no",
		Value:      5,
	}

	answers := make([]api.TextMcAnswer, 2)
	answers[0] = goodAnswer
	answers[1] = badAnswer

	question := api.McQuestion{
		AnswersToShow:     answers,
		ChosenAnswerIndex: chosenAnswerIndex,
	}
	questions[0] = question

	/*
		TODO add multiple questionnaires for testing, at least one for every category
	*/
	return api.McQuestionnaire{
		Description: "test description",
		Category:    "test",
		Questions:   questions,
	}
}

func getTestStrategyComps() []api.StrategyComponent {
	strategyComponents := make([]api.StrategyComponent, 4)

	bestComp := api.StrategyComponent{
		Description: "Just be a billionaire",
		ScoreContainer: api.ScoreContainer{
			FinRiskTolerance:  10,
			TimeFlexibility:   10,
			CogBiasResistance: 10,
			FinanceKnowledge:  10,
		},
	}
	mixedComp := api.StrategyComponent{
		Description: "donate everything and live in a barrel",
		ScoreContainer: api.ScoreContainer{
			FinRiskTolerance:  3,
			TimeFlexibility:   3,
			CogBiasResistance: 3,
			FinanceKnowledge:  3,
		},
	}

	worstComp := api.StrategyComponent{
		Description: "collect social security",
		ScoreContainer: api.ScoreContainer{
			FinRiskTolerance:  1,
			TimeFlexibility:   1,
			CogBiasResistance: 1,
			FinanceKnowledge:  1,
		},
	}
	mediocreComp := api.StrategyComponent{
		Description: "Just be a at least a millionaire",
		ScoreContainer: api.ScoreContainer{
			FinRiskTolerance:  7,
			TimeFlexibility:   7,
			CogBiasResistance: 7,
			FinanceKnowledge:  7,
		},
	}
	strategyComponents[0] = bestComp
	strategyComponents[1] = mixedComp
	strategyComponents[2] = mediocreComp
	strategyComponents[3] = worstComp

	return strategyComponents
}

func generateTestUser(chosenAnswerIndex int) api.User {

	questionnaire := CreateTestQuestionnaire(chosenAnswerIndex)

	var qst = make([]api.McQuestionnaire, 1)
	qst[0] = questionnaire

	usr := api.User{
		Id:             uuid.UUID{},
		Questionnaires: qst,
	}

	return usr
}

func TestGenerateStrategyRecommendationsPosCase(t *testing.T) {

	strategyComps := getTestStrategyComps()

	recommender := RuleBasedFintoolRecommender{
		strategyComponents: strategyComps,
	}

	/*
		jsonstruct, _ := json.Marshal(questionnaire)

		println("#####################")
		println(string(jsonstruct))
		println("#####################")
	*/
	goodStrategy, badStrategy, error := recommender.GenerateStrategyRecommendations(generateTestUser(0))

	assert2.Nil(t, error, "")
	assert2.NotNil(t, badStrategy, "")
	assert2.NotNil(t, goodStrategy, "")

	log.Print("goodStrategy: ", goodStrategy)
	assert.Equal(t, goodStrategy.RecommendedComponents[0], strategyComps[0])
	assert.Equal(t, goodStrategy.RecommendedComponents[1], strategyComps[2])
	assert.Equal(t, goodStrategy.RecommendedComponents[2], strategyComps[1])
}

func TestGenerateStrategyRecommendationsNegCase(t *testing.T) {

	strategyComps := getTestStrategyComps()

	recommender := RuleBasedFintoolRecommender{
		strategyComponents: strategyComps,
	}

	goodStrategy, badStrategy, error := recommender.GenerateStrategyRecommendations(generateTestUser(1))

	assert2.Nil(t, error, "")
	assert2.NotNil(t, badStrategy, "")
	assert2.NotNil(t, goodStrategy, "")

	log.Print("strategy: ", goodStrategy)
	assert.Equal(t, goodStrategy.RecommendedComponents[0], strategyComps[3])
	assert.Equal(t, goodStrategy.RecommendedComponents[1], strategyComps[1])
	assert.Equal(t, goodStrategy.RecommendedComponents[2], strategyComps[2])
}
