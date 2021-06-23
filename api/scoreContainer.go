package api

type ScoreContainer struct {
	FinRiskTolerance  int `json:"fin_risk_tolerance"`
	PsyRiskTolerance  int `json:"psy_risk_tolerance"`
	TimeFlexibility   int `json:"time_flexibility"`
	CogBiasResistance int `json:"cog_bias_resistance"`
	FinanceKnowledge  int `json:"finance_knowledge"`
}

func (sc *ScoreContainer) AverageIze(divisor int) (averages ScoreContainer) {
	return ScoreContainer{
		FinRiskTolerance:  sc.FinRiskTolerance / divisor,
		TimeFlexibility:   sc.TimeFlexibility / divisor,
		CogBiasResistance: sc.CogBiasResistance / divisor,
		FinanceKnowledge:  sc.FinanceKnowledge / divisor,
	}
}

func (sc *ScoreContainer) Diff(other ScoreContainer) (differences ScoreContainer) {

	differences.FinRiskTolerance = absolute(sc.FinRiskTolerance - other.FinRiskTolerance)
	differences.TimeFlexibility = absolute(sc.TimeFlexibility - other.TimeFlexibility)
	differences.CogBiasResistance = absolute(sc.CogBiasResistance - other.CogBiasResistance)
	differences.FinanceKnowledge = absolute(sc.FinanceKnowledge - other.FinanceKnowledge)

	return differences
}

func absolute(value int) int {
	if value <= 0 {
		return value * -1
	}
	return value
}
