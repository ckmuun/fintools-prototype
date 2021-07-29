import {ScoreContainer} from "./strategy.service";


export function getNumberArrayFromScoreContainer(sc: ScoreContainer): number[] {

  return [sc.time_flexibility, sc.fin_risk_tolerance, sc.psy_risk_tolerance, sc.cog_bias_resistance, sc.financial_knowledge]
}
