package _testUtils

import (
	"reccengine/api"
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

	metadata := api.QuestionMetadata{
		Category: "test-category",
	}

	question := api.McQuestion{
		AnswersToShow:     answers,
		ChosenAnswerIndex: chosenAnswerIndex,
		QuestionText:      "Are all your financial needs satisfied already",
		QuestionMetadata:  metadata,
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
func GetTestStrategyComps() []api.StrategyComponent {
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

func GenerateTestUser(chosenAnswerIndex int) []api.McQuestionnaire {

	questionnaire := CreateTestQuestionnaire(chosenAnswerIndex)

	var qst = make([]api.McQuestionnaire, 1)
	qst[0] = questionnaire

	return qst
}
