package api

import "errors"

type McAnswerI interface {
	GetAnswer()
	GetValue() int
}

type PictureMcAnswer struct {
	Picture []byte `json:"picture"`
	Value   int
}

func (p *PictureMcAnswer) GetAnswer() []byte {
	return p.Picture
}

func (p *PictureMcAnswer) GetValue() int {
	return p.Value
}

type TextMcAnswer struct {
	AnswerText string
	Value      int
}

func (tmca *TextMcAnswer) GetAnswer() string {
	return tmca.AnswerText
}

func (tmca *TextMcAnswer) GetValue() int {
	return tmca.Value
}

// A multiple choice question inside a questionnaire
type McQuestion struct {
	AnswersToShow     []TextMcAnswer `json:"answers_to_show"`
	ChosenAnswerIndex int            `json:"chosen_answer_index"`
}

func (mcq *McQuestion) GetValueOfChosenAnswer() int {
	// the var is instantiated with -1
	if mcq.ChosenAnswerIndex >= 0 {
		return mcq.AnswersToShow[mcq.ChosenAnswerIndex].Value
	}
	return -1
}

/*
	Create a new Multiple Choice McQuestion.
	The index for the chose answer is set to -1 as an init value.
*/
func NewMcQuestion(questionText string, answersToShow []TextMcAnswer) *McQuestion {
	question := &McQuestion{
		AnswersToShow:     answersToShow,
		ChosenAnswerIndex: -1,
	}
	return question
}

/*
	Setting the index of the chosen answer at the question.
	Implicitly also changes the return value fof IsAnswered()
*/
func (mcq *McQuestion) SetAnswerIndex(indexOfChoseAnswer int) {
	mcq.ChosenAnswerIndex = indexOfChoseAnswer
}

/*
	@returns whether the question has already been answered.
	It just checks whether the index of the chosen answer was modified
	to a value != -1, which is set in the constructor as an initial value.
*/
func (mcq *McQuestion) IsAnswered() bool {
	if mcq.ChosenAnswerIndex >= 0 {
		return true
	}
	return false
}

/*
	@returns the full Answer object with Metadata and Scores
	It is important to note that 'answer' is more than just a string, but instead a semantic object.
*/
func (mcq *McQuestion) GetAnswer() *TextMcAnswer {
	if mcq.IsAnswered() {
		return &mcq.AnswersToShow[mcq.ChosenAnswerIndex]
	}
	return nil
}

/*
	@returns the textual representation of a given answer
*/
func (mcq *McQuestion) GetAnswerText() string {

	if mcq.IsAnswered() {
		return mcq.AnswersToShow[mcq.ChosenAnswerIndex].AnswerText
	}
	return "question not yet answered"
}

type Questionnaire interface {
	Finished() bool
}

/*
	A Multiple Choice Questionnaire
*/
type McQuestionnaire struct {
	Description string       `json:"description"`
	Category    string       `json:"category"`
	Questions   []McQuestion `json:"questions"`
}

func (mc *McQuestionnaire) sumAnswers() (int, error) {
	if !mc.Finished() {
		return -1, errors.New("questionnaire not finished, can not add scores")
	}

	score := 0
	for _, question := range mc.Questions {
		score += question.GetValueOfChosenAnswer()
	}
	return score, nil
}

func (mc *McQuestionnaire) Finished() bool {
	for _, question := range mc.Questions {
		if !question.IsAnswered() {
			return false
		}
	}
	return true
}
