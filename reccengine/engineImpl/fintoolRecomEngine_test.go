package engineImpl

import (
	"github.com/google/uuid"
	"github.com/magiconair/properties/assert"
	assert2 "github.com/stretchr/testify/assert"
	"log"
	"reccengine/api"
	"testing"
)

func createTestQuestionnaire(chosenAnswerIndex int) api.McQuestionnaire {
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
		Description: "",
		Category:    "",
		Questions:   questions,
	}

}

func getTestStrategyComps() []api.StrategyComponent {
	strategyComponents := make([]api.StrategyComponent, 4)

	bestComp := api.StrategyComponent{
		Description: "Just be a billionaire",
		ScoreContainer: api.ScoreContainer{
			RiskTolerance:       10,
			FlexibilityReq:      10,
			IntellectualReq:     10,
			FinanceKnowledgeReq: 10,
		},
	}
	mixedComp := api.StrategyComponent{
		Description: "donate everything and live in a barrell",
		ScoreContainer: api.ScoreContainer{
			RiskTolerance:       3,
			FlexibilityReq:      3,
			IntellectualReq:     3,
			FinanceKnowledgeReq: 3,
		},
	}

	worstComp := api.StrategyComponent{
		Description: "collect social security",
		ScoreContainer: api.ScoreContainer{
			RiskTolerance:       1,
			FlexibilityReq:      1,
			IntellectualReq:     1,
			FinanceKnowledgeReq: 1,
		},
	}
	mediocreComp := api.StrategyComponent{
		Description: "Just be a at least a millionaire",
		ScoreContainer: api.ScoreContainer{
			RiskTolerance:       7,
			FlexibilityReq:      7,
			IntellectualReq:     7,
			FinanceKnowledgeReq: 7,
		},
	}
	strategyComponents[0] = bestComp
	strategyComponents[1] = mixedComp
	strategyComponents[2] = mediocreComp
	strategyComponents[3] = worstComp

	return strategyComponents
}

func generateTestUser(chosenAnswerIndex int) api.User {

	questionnaire := createTestQuestionnaire(chosenAnswerIndex)

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
	assert.Equal(t, goodStrategy.Components[0], strategyComps[0])
	assert.Equal(t, goodStrategy.Components[1], strategyComps[2])
	assert.Equal(t, goodStrategy.Components[2], strategyComps[1])
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
	assert.Equal(t, goodStrategy.Components[0], strategyComps[3])
	assert.Equal(t, goodStrategy.Components[1], strategyComps[1])
	assert.Equal(t, goodStrategy.Components[2], strategyComps[2])
}
