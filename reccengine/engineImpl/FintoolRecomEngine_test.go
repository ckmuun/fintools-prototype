package engineImpl

import (
	"log"
	"reccengine/api"
	"testing"
)

var testQuestionnaire = createTestQuestionnaire()

func createTestQuestionnaire() api.McQuestionnaire {
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
		Scores: api.ScoreContainer{
			Flexibility:         10,
			Time:                10,
			Intellectual:        10,
			ExecutionComplexity: 10,
			Risk:                10,
		},
	}
	badAnswer := api.McAnswer{
		AnswerText: "no",
		Scores: api.ScoreContainer{
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
		ChosenAnswerIndex: 0,
	}
	question.QuestionMetadata = metadata
	questions[0] = question

	return api.McQuestionnaire{
		Questions: questions,
	}

}

func init() {

}

func TestGenerateStrategyRecommendations(t *testing.T) {

	strategyComponents := make([]api.StrategyComponent, 4)

	component := api.StrategyComponent{
		Description: "Just be a billionaire",
		ScoreReqs: api.ScoreContainer{
			Flexibility:         10,
			Time:                10,
			Intellectual:        10,
			ExecutionComplexity: 10,
			Risk:                10,
		},
	}
	component1 := api.StrategyComponent{
		Description: "donate everything and live in a barrell",
		ScoreReqs: api.ScoreContainer{
			Flexibility:         2,
			Time:                2,
			Intellectual:        3,
			ExecutionComplexity: 4,
			Risk:                6,
		},
	}
	component3 := api.StrategyComponent{
		Description: "collect social security",
		ScoreReqs: api.ScoreContainer{
			Flexibility:         1,
			Time:                1,
			Intellectual:        1,
			ExecutionComplexity: 1,
			Risk:                1,
		},
	}
	component2 := api.StrategyComponent{
		Description: "Just be a at least a millionaire",
		ScoreReqs: api.ScoreContainer{
			Flexibility:         5,
			Time:                5,
			Intellectual:        5,
			ExecutionComplexity: 5,
			Risk:                5,
		},
	}
	strategyComponents[0] = component
	strategyComponents[1] = component1
	strategyComponents[2] = component2
	strategyComponents[3] = component3

	recommender := RuleBasedFintoolRecommender{
		strategyComponents: strategyComponents,
	}

	strategy := recommender.GenerateStrategyRecommendations(testQuestionnaire)

	log.Print("strategy: ", strategy)
}
