package questionnaireImpl

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

type QuestionnaireSvcImpl struct {
	QuestionnaireNames        []string
	BasicQuestionnaire        api.McQuestionnaire
	FinancialExpQuestionnaire api.McQuestionnaire
	SkillsQuestionnaire       api.McQuestionnaire
	CogBiasQuestionnaire      api.McQuestionnaire
	TimeFlexibility           api.McQuestionnaire
	QstMapping                *hashmap.Map
}

/*
	Constructor for the questionnaire service, not really elegant, though.
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
	filepath := "./_resources/PsychologicalRiskToleranceQ.json"
	file := utils.LoadJsonFileIntoByteArr(filepath)

	_ = json.Unmarshal([]byte(file), &questionnaire)
	log.Println(questionnaire)
	return questionnaire
}

func loadCogBiasQuestionnaire() api.McQuestionnaire {
	var questionnaire = api.McQuestionnaire{}
	filepath := "./_resources/CogBiasResistanceQ.json"
	file := utils.LoadJsonFileIntoByteArr(filepath)

	_ = json.Unmarshal([]byte(file), &questionnaire)
	log.Println(questionnaire)
	return questionnaire
}

func loadBasicQuestionnaire() api.McQuestionnaire {
	var questionnaire = api.McQuestionnaire{}
	filepath := "./_resources/FinancialRiskToleranceQ.json"
	file := utils.LoadJsonFileIntoByteArr(filepath)

	_ = json.Unmarshal([]byte(file), &questionnaire)
	log.Println(questionnaire)
	return questionnaire
}

func loadTimeFlexibilityQuestionnaire() api.McQuestionnaire {
	var questionnaire = api.McQuestionnaire{}
	filepath := "./_resources/TimeFlexibilityQ.json"
	file := utils.LoadJsonFileIntoByteArr(filepath)

	_ = json.Unmarshal([]byte(file), &questionnaire)
	log.Println(questionnaire)
	return questionnaire
}
