package api

type QuestionnaireSvc interface {
	GetBasicMcQuestionnaire() McQuestionnaire
	GetSpecificMcQuestionnaire() McQuestionnaire
	PersistFilledQuestionnaire()
}

type QuestionnaireSvcImpl struct {
	BasicQuestionnaire    McQuestionnaire
	SpecificQuestionnaire McQuestionnaire
	// Feedback questionnaire tODO add this here
}

func (q *QuestionnaireSvcImpl) loadQuestionnaires() {

}
