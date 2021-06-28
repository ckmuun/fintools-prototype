package main

import (
	"encoding/json"
	"github.com/emirpasic/gods/maps/hashmap"
	"log"
	"reccengine/api"
	"reccengine/utils"
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
	TimeFlexibility           api.McQuestionnaire
	QstMapping                *hashmap.Map
	// Feedback questionnaire tODO add this here
}

/*
	Constructor for the questionnaire service
	TODO currently this is somewhat clumsy. Check out more elgeant ways to setup this service
*/
func NewQuestionnaireSvcImpl() *QuestionnaireSvcImpl {

	svc := &QuestionnaireSvcImpl{
		BasicQuestionnaire:        loadBasicQuestionnaire(),
		FinancialExpQuestionnaire: loadFinancialExpQuestionnaire(),
		SkillsQuestionnaire:       loadSkillsQuestionnaire(),
		CogBiasQuestionnaire:      loadCogBiasQuestionnaire(),
		TimeFlexibility:           loadTimeFlexibilityQuestionnaire(),
	}

	names := []string{
		svc.BasicQuestionnaire.Category,
		svc.FinancialExpQuestionnaire.Category,
		svc.SkillsQuestionnaire.Category,
		svc.CogBiasQuestionnaire.Category,
	}

	questionnaireMap := hashmap.New()

	questionnaireMap.Put(svc.BasicQuestionnaire.Category, &svc.BasicQuestionnaire)
	questionnaireMap.Put(svc.FinancialExpQuestionnaire.Category, &svc.FinancialExpQuestionnaire)
	questionnaireMap.Put(svc.SkillsQuestionnaire.Category, &svc.SkillsQuestionnaire)
	questionnaireMap.Put(svc.CogBiasQuestionnaire.Category, &svc.CogBiasQuestionnaire)
	questionnaireMap.Put(svc.TimeFlexibility.Category, &svc.TimeFlexibility)

	svc.QuestionnaireNames = names
	svc.QstMapping = questionnaireMap
	return svc
}

/*
	JSON loader functions for questionnaires from disk
*/
func loadFinancialExpQuestionnaire() api.McQuestionnaire {
	var questionnaire = api.McQuestionnaire{}
	file := utils.LoadJsonFileIntoByteArr("./_resources/FinancialKnowledgeQ.json")

	_ = json.Unmarshal([]byte(file), &questionnaire)
	log.Println(questionnaire)
	return questionnaire
}

func loadSkillsQuestionnaire() api.McQuestionnaire {
	var questionnaire = api.McQuestionnaire{}
	file := utils.LoadJsonFileIntoByteArr("./_resources/PsychologicalRiskToleranceQ.json")

	_ = json.Unmarshal([]byte(file), &questionnaire)
	log.Println(questionnaire)
	return questionnaire
}

func loadCogBiasQuestionnaire() api.McQuestionnaire {
	var questionnaire = api.McQuestionnaire{}
	file := utils.LoadJsonFileIntoByteArr("./_resources/CogBiasResistanceQ.json")

	_ = json.Unmarshal([]byte(file), &questionnaire)
	log.Println(questionnaire)
	return questionnaire
}

func loadBasicQuestionnaire() api.McQuestionnaire {
	var questionnaire = api.McQuestionnaire{}
	file := utils.LoadJsonFileIntoByteArr("./_resources/FinancialRiskToleranceQ.json")

	_ = json.Unmarshal([]byte(file), &questionnaire)
	log.Println(questionnaire)
	return questionnaire
}

func loadTimeFlexibilityQuestionnaire() api.McQuestionnaire {
	var questionnaire = api.McQuestionnaire{}
	file := utils.LoadJsonFileIntoByteArr("./_resources/TimeFlexibilityQ.json")

	_ = json.Unmarshal([]byte(file), &questionnaire)
	log.Println(questionnaire)
	return questionnaire
}
