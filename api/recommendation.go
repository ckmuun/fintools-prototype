package api

import "github.com/google/uuid"

type FintoolRecomDto struct {
	Id                 uuid.UUID      `json:"id"`
	GoodRecommendation FintoolRecom   `json:"good_recommendation"`
	BadRecommendation  FintoolRecom   `json:"bad_recommendation"`
	UserScores         ScoreContainer `json:"user_scores"`
}

/*
	A Single Component for an overall personal finance strategy
	It has four different requirement categories.
		- FinRiskTolerance mostly targets the individual financial situation
		- TimeFlexibility depicts the room of movement, f.e. how easy someone could switch jobs
		- CogBiasResistance points at the general complexity of a strategy
		- Finance Knowledge is straightforward, targeting experience with certain asset classes etc.
*/
type StrategyComponent struct {
	Description string `json:"description"`
	ScoreContainer
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
