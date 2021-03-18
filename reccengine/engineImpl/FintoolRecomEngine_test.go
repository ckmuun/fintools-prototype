package engineImpl

import (
	"reccengine/api"
	"testing"
)

var testQuestionnaire = createTestQuestionnaire()

func createTestQuestionnaire() api.Questionnaire {
	questions := make([]api.Question, 1)

	metadata := api.QuestionMetadata{
		QuestionText:    "Are you a billionaire?",
		Category:        "baseline",
		IsAbsoluteScale: false,
		Tier:            0,
		Scale:           api.Boolean,
	}

	answers := make([]string, 2)
	answers[0] = "yes"
	answers[1] = "no"

	question := api.MultipleChoiceQuestion{
		Metadata:          metadata,
		AnswersToShow:     answers,
		ChosenAnswerIndex: 0,
		Answered:          true,
	}
	questions[0] = &question

	return api.Questionnaire{
		Questions: questions,
	}

}

func init() {

}

func TestGenerateStrategyRecommendations(t *testing.T) {

}
