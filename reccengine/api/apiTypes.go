package api

// A multiple choice question inside a questionnaire
type MultipleChoiceQuestion struct {
	Metadata          QuestionMetadata `json:"metadata"`
	AnswersToShow     []string         `json:"answers_to_show"`
	ChosenAnswerIndex int8             `json:"chosen_answer_index"`
	Answered          bool             `json:"answered"`
}

type Question interface {
	IsMultipleChoice() bool
	GetAnswer() string
}

type QuestionMetadata struct {
	QuestionText    string `json:"question_text"`
	Category        string `json:"category"`
	IsAbsoluteScale bool   `json:"is_absolute_scale"`
	Tier            int8   `json:"tier"`
	Scale           int8   `json:"scale"`
}

type OpenEndedQuestion struct {
	Metadata QuestionMetadata
	answer   string
}

func (q *OpenEndedQuestion) IsMultipleChoice() bool {
	return false
}

func (q *OpenEndedQuestion) GetAnswer() string {
	return q.answer
}

func (q *MultipleChoiceQuestion) IsMultipleChoice() bool {
	return true
}

func (q *MultipleChoiceQuestion) GetAnswer() string {

	if q.Answered {
		return q.AnswersToShow[q.ChosenAnswerIndex]
	}
	return "question not yet answered"
}

type Questionnaire struct {
	Questions []Question
}

type StrategyComponent struct {
	Description             string `json:"description"`
	RiskLevel               int8   `json:"risk_level"`
	EntrepreneurSkillLevel  int8   `json:"entrepreneur_skill_level"`
	FlexibilityLevel        int8   `json:"flexibility_level"`
	TimeEffortLevel         int8   `json:"time_effort_level"`
	IntellectualEffortLevel int8   `json:"intellectual_effort_level"`
	TransactionCostLevel    int8   `json:"transaction_cost_level"`
}

type Strategy struct {
	Components []StrategyComponent
}
