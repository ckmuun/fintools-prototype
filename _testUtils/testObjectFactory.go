package _testUtils

import (
	"encoding/json"
	"github.com/google/uuid"
	"reccengine/api"
	"reccengine/utils"
)

func LoadRealStrategiesFromJson() (comps []api.StrategyComponent) {

	data := utils.LoadJsonFileIntoByteArr("./_resources/strategies/strategyComponents.json")
	_ = json.Unmarshal(data, &comps)
	return comps
}

func GetDefaultQSubmitDto() api.SubmitDto {
	categories := make([]string, 1)
	categories[0] = "test"

	return api.SubmitDto{
		CreateTestQuestionnairesForCategories(1, categories),
		api.DefaultUserProfile(),
	}
}

func GetDefaultUserScoreContainer() api.ScoreContainer {

	return api.ScoreContainer{
		FinRiskTolerance:   1,
		PsyRiskTolerance:   2,
		TimeFlexibility:    3,
		CogBiasResistance:  4,
		FinancialKnowledge: 5,
	}
}

func GetDefaultGoodRecom() api.FintoolRecom {
	var comps [3]api.StrategyComponent

	allComps := LoadRealStrategiesFromJson()
	comps[0] = allComps[0]
	comps[1] = allComps[1]
	comps[2] = allComps[2]

	recom := api.FintoolRecom{
		RecommendedComponents: comps,
		WildcardComponent:     allComps[len(allComps)-1],
	}

	return recom
}

func GetDefaultBadRecom() api.FintoolRecom {

	var comps [3]api.StrategyComponent

	allComps := LoadRealStrategiesFromJson()
	comps[0] = allComps[len(allComps)-1]
	comps[1] = allComps[len(allComps)-2]
	comps[2] = allComps[len(allComps)-3]

	recom := api.FintoolRecom{
		RecommendedComponents: comps,
		WildcardComponent:     allComps[0],
	}

	return recom
}

func GetExampleFintoolRecomDto() api.FintoolRecomDto {

	dto := api.FintoolRecomDto{
		Id:                 uuid.UUID{},
		GoodRecommendation: GetDefaultGoodRecom(),
		BadRecommendation:  GetDefaultBadRecom(),
		UserScores:         GetDefaultUserScoreContainer(),
	}
	return dto
}

func GetExampleFeedbackArray() []api.StrategyFeedback {
	feedback := make([]api.StrategyFeedback, 3)

	feedback0 := api.StrategyFeedback{
		Rating:       5,
		StrategyName: "Strategy A",
		UserId:       uuid.UUID{},
	}
	feedback1 := api.StrategyFeedback{
		Rating:       3,
		StrategyName: "Strategy B",
		UserId:       uuid.UUID{},
	}
	feedback2 := api.StrategyFeedback{
		Rating:       2,
		StrategyName: "Strategy C",
		UserId:       uuid.UUID{},
	}
	feedback[0] = feedback0
	feedback[1] = feedback1
	feedback[2] = feedback2

	return feedback
}

func FillQuestionnairesFromJson() []api.McQuestionnaire {

	rawQuestionnaires := loadQuestionnairesFromJson()

	for i := range rawQuestionnaires {

		for ii := range rawQuestionnaires[i].Questions {
			rawQuestionnaires[i].Questions[ii].SetAnswerIndex(0)
		}
	}

	return rawQuestionnaires
}

func loadQuestionnairesFromJson() []api.McQuestionnaire {
	questionnaires := make([]api.McQuestionnaire, 5)

	// Go stands for "go write some boilerplate..."
	var cogbiasQ api.McQuestionnaire
	_ = json.Unmarshal(
		utils.LoadJsonFileIntoByteArr("./_resources/CogBiasResistanceQ.json"),
		&cogbiasQ,
	)
	questionnaires[0] = cogbiasQ

	var finKnowledgeQ api.McQuestionnaire
	_ = json.Unmarshal(
		utils.LoadJsonFileIntoByteArr("./_resources/FinancialKnowledgeQ.json"),
		&finKnowledgeQ,
	)
	questionnaires[1] = finKnowledgeQ
	var finRiskToleranceQ api.McQuestionnaire
	_ = json.Unmarshal(
		utils.LoadJsonFileIntoByteArr("./_resources/FinancialRiskToleranceQ.json"),
		&finRiskToleranceQ,
	)
	questionnaires[2] = finRiskToleranceQ
	var psyRiskToleranceQ api.McQuestionnaire
	_ = json.Unmarshal(
		utils.LoadJsonFileIntoByteArr("./_resources/PsychologicalRiskToleranceQ.json"),
		&psyRiskToleranceQ,
	)
	questionnaires[3] = psyRiskToleranceQ
	var timeFlexibilityQ api.McQuestionnaire
	_ = json.Unmarshal(
		utils.LoadJsonFileIntoByteArr("./_resources/TimeFlexibilityQ.json"),
		&timeFlexibilityQ,
	)
	questionnaires[4] = timeFlexibilityQ

	return questionnaires
}

func CreateTestQuestionnairesForCategories(chosenAnswerIndex int, categories []string) []api.McQuestionnaire {
	testQuestionnaires := make([]api.McQuestionnaire, len(categories))

	for index := range testQuestionnaires {

		questions := make([]api.McQuestion, 1)

		goodAnswer := api.TextMcAnswer{
			AnswerText: "yes",
			Value:      10,
		}
		badAnswer := api.TextMcAnswer{
			AnswerText: "no",
			Value:      4,
		}

		answers := make([]api.TextMcAnswer, 2)
		answers[0] = goodAnswer
		answers[1] = badAnswer

		metadata := api.QuestionMetadata{
			Category: "test-question-category",
		}

		question := api.McQuestion{
			AnswersToShow:     answers,
			ChosenAnswerIndex: chosenAnswerIndex,
			QuestionText:      "Are all your financial needs satisfied already",
			QuestionMetadata:  metadata,
		}
		questions[0] = question

		q := api.McQuestionnaire{
			Description: "test description",
			Category:    categories[index],
			Questions:   questions,
		}
		testQuestionnaires[index] = q
	}
	return testQuestionnaires
}
func GetTestStrategyComps() []api.StrategyComponent {
	strategyComponents := make([]api.StrategyComponent, 4)

	bestComp := api.StrategyComponent{
		Description: "Just be a billionaire",
		ScoreContainer: api.ScoreContainer{
			FinRiskTolerance:   10,
			PsyRiskTolerance:   10,
			TimeFlexibility:    10,
			CogBiasResistance:  10,
			FinancialKnowledge: 10,
		},
	}
	mixedComp := api.StrategyComponent{
		Description: "donate everything and live in a barrel",
		ScoreContainer: api.ScoreContainer{
			FinRiskTolerance:   3,
			PsyRiskTolerance:   3,
			TimeFlexibility:    3,
			CogBiasResistance:  3,
			FinancialKnowledge: 3,
		},
	}

	worstComp := api.StrategyComponent{
		Description: "collect social security",
		ScoreContainer: api.ScoreContainer{
			FinRiskTolerance:   1,
			PsyRiskTolerance:   1,
			TimeFlexibility:    1,
			CogBiasResistance:  1,
			FinancialKnowledge: 1,
		},
	}
	mediocreComp := api.StrategyComponent{
		Description: "Just be a at least a millionaire",
		ScoreContainer: api.ScoreContainer{
			FinRiskTolerance:   7,
			PsyRiskTolerance:   7,
			TimeFlexibility:    7,
			CogBiasResistance:  7,
			FinancialKnowledge: 7,
		},
	}
	strategyComponents[0] = bestComp
	strategyComponents[1] = mixedComp
	strategyComponents[2] = mediocreComp
	strategyComponents[3] = worstComp

	return strategyComponents
}

//func GenerateTestUser(chosenAnswerIndex int) []api.McQuestionnaire {
//
//	questionnaire := CreateTestQuestionnairesForCategories(chosenAnswerIndex)
//
//	var qst = make([]api.McQuestionnaire, 1)
//	qst[0] = questionnaire
//
//	return qst
//}
