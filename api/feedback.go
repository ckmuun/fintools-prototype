package api

import "github.com/google/uuid"

type StrategyFeedback struct {
	Rating       float32   `json:"rating"`
	StrategyName string    `json:"strategy_name"`
	UserId       uuid.UUID `json:"user_id"`
}
