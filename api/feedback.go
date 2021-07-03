package api

import "github.com/google/uuid"

type StrategyFeedback struct {
	Rating       int       `json:"rating"`
	StrategyName string    `json:"strategy_name"`
	UserId       uuid.UUID `json:"user_id"`
}
