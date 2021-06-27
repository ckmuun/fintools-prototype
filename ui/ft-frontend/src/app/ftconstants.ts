/*
  type ScoreContainer struct {
	FinRiskTolerance  int `json:"fin_risk_tolerance"`
	PsyRiskTolerance  int `json:"psy_risk_tolerance"`
	TimeFlexibility   int `json:"time_flexibility"`
	CogBiasResistance int `json:"cog_bias_resistance"`
	FinanceKnowledge  int `json:"finance_knowledge"`
}
 */
import {ChartData, DefaultDataPoint} from "chart.js";
import {FintoolRecom, ScoreContainer} from "./strategy.service";

export const radarchartLabels: string[] = ['TimeFlexibility', 'Financial Risk Tolerance', 'Psychological Risk Tolerance', 'Cognitive Bias Resistance', 'Finance Knowledge'];


