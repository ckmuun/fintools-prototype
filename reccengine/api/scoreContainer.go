package api

type ScoreContainer struct {
	RiskTolerance       int `json:"risk_tolerance_req"`
	FlexibilityReq      int `json:"flexibility_req"`
	IntellectualReq     int `json:"intellectual_req"`
	FinanceKnowledgeReq int `json:"finance_knowledge_req "`
}

func (sc *ScoreContainer) AverageIze(divisor int) (averages ScoreContainer) {
	return ScoreContainer{
		RiskTolerance:       sc.RiskTolerance / divisor,
		FlexibilityReq:      sc.FlexibilityReq / divisor,
		IntellectualReq:     sc.IntellectualReq / divisor,
		FinanceKnowledgeReq: sc.FinanceKnowledgeReq / divisor,
	}
}

func (sc *ScoreContainer) Diff(other ScoreContainer) (differences ScoreContainer) {

	differences.RiskTolerance = absolute(sc.RiskTolerance - other.RiskTolerance)
	differences.FlexibilityReq = absolute(sc.FlexibilityReq - other.FlexibilityReq)
	differences.IntellectualReq = absolute(sc.IntellectualReq - other.IntellectualReq)
	differences.FinanceKnowledgeReq = absolute(sc.FinanceKnowledgeReq - other.FinanceKnowledgeReq)

	return differences
}

func absolute(value int) int {
	if value <= 0 {
		return value * -1
	}
	return value
}
