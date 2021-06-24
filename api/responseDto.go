package api

import "github.com/google/uuid"

type FintoolRecomDto struct {
	Id                 uuid.UUID      `json:"id"`
	GoodRecommendation FintoolRecom   `json:"good_recommendation"`
	BadRecommendation  FintoolRecom   `json:"bad_recommendation"`
	UserScores         ScoreContainer `json:"user_scores"`
}
