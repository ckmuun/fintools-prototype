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
		questionnaireSvc = NewQuestionnaireSvcImpl()
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
	QuestionnaireNames        []string
	BasicQuestionnaire        api.McQuestionnaire
	FinancialExpQuestionnaire api.McQuestionnaire
	SkillsQuestionnaire       api.McQuestionnaire
	CogBiasQuestionnaire      api.McQuestionnaire
	QstMapping                map[string]api.Questionnaire
	// Feedback questionnaire tODO add this here
}

/*
	Constructor for the questionnaire service
	TODO finalize the questionnaires to a point where only intra-questionnaire changes
	are being made. -> Only questions, answers and weightings are changed but not the questionnaires overall.

	TODO currently this is somewhat clumsy. Check out more elgeant ways to setup this service
*/
func NewQuestionnaireSvcImpl() *QuestionnaireSvcImpl {

	svc := &QuestionnaireSvcImpl{
		BasicQuestionnaire:        loadBasicQuestionnaire(),
		FinancialExpQuestionnaire: loadFinancialExpQuestionnaire(),
		SkillsQuestionnaire:       loadSkillsQuestionnaire(),
	}

	names := []string{
		svc.BasicQuestionnaire.Category,
		svc.FinancialExpQuestionnaire.Category,
		svc.SkillsQuestionnaire.Category,
	}

	qstMap := make(map[string]api.Questionnaire, len(names))

	qstMap[svc.BasicQuestionnaire.Category] = &svc.BasicQuestionnaire
	qstMap[svc.FinancialExpQuestionnaire.Category] = &svc.FinancialExpQuestionnaire
	qstMap[svc.SkillsQuestionnaire.Category] = &svc.SkillsQuestionnaire

	svc.QuestionnaireNames = names
	svc.QstMapping = qstMap
	return svc
}

/*
	JSON loader functions for questionnaires from disk
*/
func loadFinancialExpQuestionnaire() api.McQuestionnaire {
	var questionnaire = api.McQuestionnaire{}
	file := loadQuestionnaireFile("./resources/FinancialExperienceQuestionnaire.json")

	_ = json.Unmarshal([]byte(file), &questionnaire)
	log.Println(questionnaire)
	return questionnaire
}

func loadSkillsQuestionnaire() api.McQuestionnaire {
	var questionnaire = api.McQuestionnaire{}
	file := loadQuestionnaireFile("./resources/SkillsQuestionnaire.json")

	_ = json.Unmarshal([]byte(file), &questionnaire)
	log.Println(questionnaire)
	return questionnaire
}

func loadCogBiasQuestionnaire() api.McQuestionnaire {
	var questionnaire = api.McQuestionnaire{}
	file := loadQuestionnaireFile("./resources/CogBiasQuestionnaire.json")

	_ = json.Unmarshal([]byte(file), &questionnaire)
	log.Println(questionnaire)
	return questionnaire
}

func loadBasicQuestionnaire() api.McQuestionnaire {

	var questionnaire = api.McQuestionnaire{}
	//file := loadQuestionnaireFile("../resources/BasicMcQuestionnaire.json")
	file := loadQuestionnaireFile("./resources/BasicMcQuestionnaire.json")

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
