package api

import "github.com/google/uuid"

type FintoolRecomDto struct {
	Id                 uuid.UUID      `json:"id"`
	GoodRecommendation FintoolRecom   `json:"good_recommendation"`
	BadRecommendation  FintoolRecom   `json:"bad_recommendation"`
	UserScores         ScoreContainer `json:"user_scores"`
	Profile            UserProfile    `json:"profile"`
}

/*
	A personal finance strategy consisting of multiple indiivdual components
	Note on the wildcard component: this is basically a somewhat randomized component, that is chosen
	independently of the actual recommendation.
*/
type FintoolRecom struct {
	RecommendedComponents [3]StrategyComponent `json:"recommended_components"`
	WildcardComponent     StrategyComponent    `json:"wildcard_component"`
}
