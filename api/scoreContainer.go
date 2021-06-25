package api

type ScoreContainer struct {
	FinRiskTolerance   int `json:"fin_risk_tolerance"`
	PsyRiskTolerance   int `json:"psy_risk_tolerance"`
	TimeFlexibility    int `json:"time_flexibility"`
	CogBiasResistance  int `json:"cog_bias_resistance"`
	FinancialKnowledge int `json:"financial_knowledge"`
}

func (sc *ScoreContainer) AverageIze(divisor int) (averages ScoreContainer) {
	return ScoreContainer{
		FinRiskTolerance:   sc.FinRiskTolerance / divisor,
		PsyRiskTolerance:   sc.PsyRiskTolerance / divisor,
		TimeFlexibility:    sc.TimeFlexibility / divisor,
		CogBiasResistance:  sc.CogBiasResistance / divisor,
		FinancialKnowledge: sc.FinancialKnowledge / divisor,
	}
}

func (sc *ScoreContainer) Diff(other ScoreContainer) (differences ScoreContainer) {

	differences.FinRiskTolerance = absolute(sc.FinRiskTolerance - other.FinRiskTolerance)
	differences.PsyRiskTolerance = absolute(sc.PsyRiskTolerance - other.PsyRiskTolerance)
	differences.TimeFlexibility = absolute(sc.TimeFlexibility - other.TimeFlexibility)
	differences.CogBiasResistance = absolute(sc.CogBiasResistance - other.CogBiasResistance)
	differences.FinancialKnowledge = absolute(sc.FinancialKnowledge - other.FinancialKnowledge)

	return differences
}

func (sc *ScoreContainer) GetVectorArr() []int {

	vector := make([]int, 5)

	vector[0] = sc.FinRiskTolerance
	vector[1] = sc.PsyRiskTolerance
	vector[2] = sc.TimeFlexibility
	vector[3] = sc.CogBiasResistance
	vector[4] = sc.FinancialKnowledge

	return vector
}

func absolute(value int) int {
	if value <= 0 {
		return value * -1
	}
	return value
}
