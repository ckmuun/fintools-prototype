package api

/*
	A Single Component for an overall personal finance strategy
	It has four different requirement categories.
		- FinRiskTolerance mostly targets the individual financial situation
		- TimeFlexibility depicts the room of movement, f.e. how easy someone could switch jobs
		- CogBiasResistance points at the general complexity of a strategy
		- Finance Knowledge is straightforward, targeting experience with certain asset classes etc.
*/
type StrategyComponent struct {
	Description string   `json:"description"`
	Name        string   `json:"name"`
	Links       []string `json:"links"`
	Tags        []string `json:"tags"`
	MajorPros   []string `json:"major_pros"`
	MajorCons   []string `json:"major_cons"`
	ScoreContainer
}
