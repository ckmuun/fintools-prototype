package api

// this container stores the finance attributes. Depending on wether the
// containing struct is an answer or a component, it's interpreted as "providec" or "required"
type ScoreContainer struct {
	Flexibility         int `json:"flexibility"`
	Time                int `json:"time"`
	Intellectual        int `json:"intellectual"`
	ExecutionComplexity int `json:"execution_complexity"`
	Risk                int `json:"risk"`
}

type QuestionMetadata struct {
	QuestionText    string `json:"question_text"`
	Category        string `json:"category"`
	IsAbsoluteScale bool   `json:"is_absolute_scale"`
	Tier            int    `json:"tier"`
	Scale           int    `json:"scale"`
}

type McAnswer struct {
	AnswerText string
	ScoreContainer
}

// A multiple choice question inside a questionnaire
type McQuestion struct {
	QuestionMetadata  `json:"metadata"`
	AnswersToShow     []McAnswer `json:"answers_to_show"`
	ChosenAnswerIndex int        `json:"chosen_answer_index"`
}

/*
	Create a new Multiple Choice McQuestion.
	The index for the chose answer is set to -1 as an init value.
*/
func NewMcQuestion(questionText string, metadata QuestionMetadata, answersToShow []McAnswer) *McQuestion {
	question := &McQuestion{
		AnswersToShow:     answersToShow,
		ChosenAnswerIndex: -1,
	}

	question.QuestionText = questionText
	question.QuestionMetadata = metadata

	return question
}

/*
	Setting the index of the chosen answer at the question.
	Implicitly also changes the return value fof IsAnswered()
*/
func (q *McQuestion) SetAnswerIndex(indexOfChoseAnswer int) {
	q.ChosenAnswerIndex = indexOfChoseAnswer
}

/*
	@returns whether the question has already been answered.
	It just checks whether the index of the chosen answer was modified
	to a value != -1, which is set in the constructor as an initial value.
*/
func (q *McQuestion) IsAnswered() bool {
	if q.ChosenAnswerIndex >= 0 {
		return true
	}
	return false
}

/*
	@returns the full Answer object with Metadata and Scores
	It is important to note that 'answer' is more than just a string, but instead a semantic object.
*/
func (q *McQuestion) GetAnswer() *McAnswer {
	if q.IsAnswered() {
		return &q.AnswersToShow[q.ChosenAnswerIndex]
	}
	return nil
}

/*
	@returns the textual representation of a given answer
*/
func (q *McQuestion) GetAnswerText() string {

	if q.IsAnswered() {
		return q.AnswersToShow[q.ChosenAnswerIndex].AnswerText
	}
	return "question not yet answered"
}

/*
	A Multiple Choice Questionnaire
*/
type McQuestionnaire struct {
	Description string       `json:"description"`
	Questions   []McQuestion `json:"questions"`
}

/*
	A Single Component for an overall personal finance strategy
*/
type StrategyComponent struct {
	Description string         `json:"description"`
	ScoreReqs   ScoreContainer `json:"score_reqs"`
}

/*
	A personal finance strategy consisting of multiple indiivdual components
*/
type Strategy struct {
	Components [3]StrategyComponent
}
