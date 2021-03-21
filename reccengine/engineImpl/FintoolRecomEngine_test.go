package engineImpl

import (
	"encoding/json"
	"github.com/magiconair/properties/assert"
	"log"
	"reccengine/api"
	"testing"
)

func createTestQuestionnaire(chosenAnswerIndex int) api.McQuestionnaire {
	questions := make([]api.McQuestion, 1)

	metadata := api.QuestionMetadata{
		QuestionText:    "Are you a billionaire?",
		Category:        "baseline",
		IsAbsoluteScale: false,
		Tier:            0,
		Scale:           api.Boolean,
	}

	goodAnswer := api.McAnswer{
		AnswerText: "yes",
		ScoreContainer: api.ScoreContainer{
			Flexibility:         10,
			Time:                10,
			Intellectual:        10,
			ExecutionComplexity: 10,
			Risk:                10,
		},
	}
	badAnswer := api.McAnswer{
		AnswerText: "no",
		ScoreContainer: api.ScoreContainer{
			Flexibility:         0,
			Time:                0,
			Intellectual:        0,
			ExecutionComplexity: 0,
			Risk:                0,
		},
	}

	answers := make([]api.McAnswer, 2)
	answers[0] = goodAnswer
	answers[1] = badAnswer

	question := api.McQuestion{
		AnswersToShow:     answers,
		ChosenAnswerIndex: chosenAnswerIndex,
	}
	question.QuestionMetadata = metadata
	questions[0] = question

	return api.McQuestionnaire{
		Questions: questions,
	}

}

func getTestStrategyComps() []api.StrategyComponent {
	strategyComponents := make([]api.StrategyComponent, 4)

	bestComp := api.StrategyComponent{
		Description: "Just be a billionaire",
		ScoreReqs: api.ScoreContainer{
			Flexibility:         10,
			Time:                10,
			Intellectual:        10,
			ExecutionComplexity: 10,
			Risk:                10,
		},
	}
	mixedComp := api.StrategyComponent{
		Description: "donate everything and live in a barrell",
		ScoreReqs: api.ScoreContainer{
			Flexibility:         2,
			Time:                2,
			Intellectual:        3,
			ExecutionComplexity: 4,
			Risk:                6,
		},
	}
	worstComp := api.StrategyComponent{
		Description: "collect social security",
		ScoreReqs: api.ScoreContainer{
			Flexibility:         1,
			Time:                1,
			Intellectual:        1,
			ExecutionComplexity: 1,
			Risk:                1,
		},
	}
	mediocreComp := api.StrategyComponent{
		Description: "Just be a at least a millionaire",
		ScoreReqs: api.ScoreContainer{
			Flexibility:         5,
			Time:                5,
			Intellectual:        5,
			ExecutionComplexity: 5,
			Risk:                5,
		},
	}
	strategyComponents[0] = bestComp
	strategyComponents[1] = mixedComp
	strategyComponents[2] = mediocreComp
	strategyComponents[3] = worstComp

	return strategyComponents
}

func TestGenerateStrategyRecommendationsPosCase(t *testing.T) {

	strategyComps := getTestStrategyComps()

	recommender := RuleBasedFintoolRecommender{
		strategyComponents: strategyComps,
	}

	questionnaire := createTestQuestionnaire(0)
	jsonstruct, _ := json.Marshal(questionnaire)

	println("#####################")
	println(string(jsonstruct))
	println("#####################")

	strategy := recommender.GenerateStrategyRecommendations(questionnaire)

	log.Print("strategy: ", strategy)
	assert.Equal(t, strategy.Components[0], strategyComps[0])
	assert.Equal(t, strategy.Components[1], strategyComps[2])
	assert.Equal(t, strategy.Components[2], strategyComps[1])
}

func TestGenerateStrategyRecommendationsNegCase(t *testing.T) {

	strategyComps := getTestStrategyComps()

	recommender := RuleBasedFintoolRecommender{
		strategyComponents: strategyComps,
	}

	strategy := recommender.GenerateStrategyRecommendations(createTestQuestionnaire(1))

	log.Print("strategy: ", strategy)
	assert.Equal(t, strategy.Components[0], strategyComps[3])
	assert.Equal(t, strategy.Components[1], strategyComps[1])
	assert.Equal(t, strategy.Components[2], strategyComps[2])
}
