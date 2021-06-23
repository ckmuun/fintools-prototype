package api

import (
	"errors"
	"github.com/google/uuid"
)

/*
	A user, e.g. someone answering the questionnaires.
*/
type User struct {
	Id uuid.UUID `json:"id"`
	ScoreContainer
	Questionnaires     []McQuestionnaire `json:"questionnaires"`
	GoodStrategy       FintoolRecom      `json:"good_strategy"`
	GoodStrategyRating Questionnaire     `json:"good_strategy_rating"`
	BadStrategy        FintoolRecom      `json:"bad_strategy"`
	BadStrategyRating  Questionnaire     `json:"bad_strategy_rating"`
}

func (u *User) CalcScores() (*ScoreContainer, error) {

	if !u.AllFinished() {
		return nil, errors.New("questionnaires not finished, can not calc scores")
	}

	for _, questionnaire := range u.Questionnaires {
		score, err := questionnaire.sumAnswers()

		if err != nil {
			return nil, err
		}

		switch questionnaire.Category {

		case "flexibility":
			u.TimeFlexibility += score
		case "riskTolerance":
			u.FinRiskTolerance += score
		case "intellectual":
			u.CogBiasResistance += score
		case "financeKnowledge":
			u.FinanceKnowledge += score
		}

	}
	return &u.ScoreContainer, nil
}

func (u *User) AllFinished() bool {

	for _, q := range u.Questionnaires {
		if !q.Finished() {
			return false
		}
	}
	return true
}
