package api

import (
	"encoding/json"
	"io/ioutil"
	"log"
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
	GetBasicMcQuestionnaire() McQuestionnaire
	GetSpecificMcQuestionnaire() McQuestionnaire
	PersistFilledQuestionnaire()
}

type QuestionnaireSvcImpl struct {
	BasicQuestionnaire        McQuestionnaire
	FinancialExpQuestionnaire McQuestionnaire
	SkillsQuestionnaire       McQuestionnaire
	CogBiasQuestionnaire      McQuestionnaire
	// Feedback questionnaire tODO add this here
}

func loadFinancialExpQuestionnaire() McQuestionnaire {
	var questionnaire = McQuestionnaire{}
	file := loadQuestionnaireFile("../resources/FinancialExperienceQuestionnaire.json")

	_ = json.Unmarshal([]byte(file), &questionnaire)
	log.Println(questionnaire)
	return questionnaire
}

func loadSkillsQuestionnaire() McQuestionnaire {
	var questionnaire = McQuestionnaire{}
	file := loadQuestionnaireFile("../resources/SkillsQuestionnaire.json")

	_ = json.Unmarshal([]byte(file), &questionnaire)
	log.Println(questionnaire)
	return questionnaire
}

func loadCogBiasQuestionnaire() McQuestionnaire {
	var questionnaire = McQuestionnaire{}
	file := loadQuestionnaireFile("../resources/CogBiasQuestionnaire.json")

	_ = json.Unmarshal([]byte(file), &questionnaire)
	log.Println(questionnaire)
	return questionnaire
}

func loadBasicQuestionnaire() McQuestionnaire {

	var questionnaire = McQuestionnaire{}
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
