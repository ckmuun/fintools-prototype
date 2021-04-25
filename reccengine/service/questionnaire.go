package service

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"reccengine/api"
	"sync"
)

var once sync.Once

var questionnaireSvc *QuestionnaireSvcImpl

func init() {

	once.Do(func() {
		log.Println("initializing Questionnaire service")
		questionnaireSvc = &QuestionnaireSvcImpl{
			BasicQuestionnaire:        loadBasicQuestionnaire(),
			FinancialExpQuestionnaire: loadFinancialExpQuestionnaire(),
			SkillsQuestionnaire:       loadSkillsQuestionnaire(),
		}
	},
	)
}

func GetQuestionnaireService() *QuestionnaireSvcImpl {
	return questionnaireSvc
}

type QuestionnaireService interface {
	GetBasicMcQuestionnaire() api.McQuestionnaire
	GetSpecificMcQuestionnaire() api.McQuestionnaire
	PersistFilledQuestionnaire()
}

type QuestionnaireSvcImpl struct {
	BasicQuestionnaire        api.McQuestionnaire
	FinancialExpQuestionnaire api.McQuestionnaire
	SkillsQuestionnaire       api.McQuestionnaire
	CogBiasQuestionnaire      api.McQuestionnaire
	// Feedback questionnaire tODO add this here
}

func loadFinancialExpQuestionnaire() api.McQuestionnaire {
	var questionnaire = api.McQuestionnaire{}
	file := loadQuestionnaireFile("../resources/FinancialExperienceQuestionnaire.json")

	_ = json.Unmarshal([]byte(file), &questionnaire)
	log.Println(questionnaire)
	return questionnaire
}

func loadSkillsQuestionnaire() api.McQuestionnaire {
	var questionnaire = api.McQuestionnaire{}
	file := loadQuestionnaireFile("../resources/SkillsQuestionnaire.json")

	_ = json.Unmarshal([]byte(file), &questionnaire)
	log.Println(questionnaire)
	return questionnaire
}

func loadCogBiasQuestionnaire() api.McQuestionnaire {
	var questionnaire = api.McQuestionnaire{}
	file := loadQuestionnaireFile("../resources/CogBiasQuestionnaire.json")

	_ = json.Unmarshal([]byte(file), &questionnaire)
	log.Println(questionnaire)
	return questionnaire
}

func loadBasicQuestionnaire() api.McQuestionnaire {

	var questionnaire = api.McQuestionnaire{}
	file := loadQuestionnaireFile("../resources/BasicMcQuestionnaire.json")

	_ = json.Unmarshal([]byte(file), &questionnaire)
	log.Println(questionnaire)
	return questionnaire
}

func loadQuestionnaireFile(filename string) []byte {
	file, err := ioutil.ReadFile(filename)

	if err != nil {
		panic("could not load questionnaire")
	}

	return file
}
