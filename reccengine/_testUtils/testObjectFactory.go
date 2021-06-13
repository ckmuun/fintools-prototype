package _testUtils

import "reccengine/api"

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
