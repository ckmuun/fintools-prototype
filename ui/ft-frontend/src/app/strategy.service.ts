import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {McQuestionnaire} from "./questionnaire.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StrategyService {

  constructor(private httpClient: HttpClient) {

  }


  postFilledQuestionnaires(questionnaires: McQuestionnaire[]): Observable<FintoolRecomDto> {
    return this.httpClient.post<FintoolRecomDto>("http://localhost:8080/api/questionnaires/", questionnaires)
  }

}

/*
  The DTO that is returned from backend, it encapsulates a recommendation and an id
 */
export class FintoolRecomDto {

  constructor(recommendation: FintoolRecom, id: string) {

    this.recommendation = recommendation;
    this.id = id;
  }

  id: string
  recommendation: FintoolRecom
}

/*
    The actual recommendation, encapsulating the components
 */
export class FintoolRecom {


}

/*
    An actual personal finance strategy component, this encapsulates the raw numerical category stores
 */
export class StrategyComponent {

  constructor(description: string) {
    this.description = description;
  }

  description: string;
}


/*
  type ScoreContainer struct {
	FinRiskTolerance  int `json:"fin_risk_tolerance"`
	PsyRiskTolerance  int `json:"psy_risk_tolerance"`
	TimeFlexibility   int `json:"time_flexibility"`
	CogBiasResistance int `json:"cog_bias_resistance"`
	FinanceKnowledge  int `json:"finance_knowledge"`
}
 */
export class ScoreContainer {
  time_flexibility: number
  fin_risk_tolerance: number
  psy_risk_tolerance: number
  finance_knowledge: number
  cog_bias_resistance: number


  constructor(time_flexibility: number, fin_risk_tolerance: number, psy_risk_tolerance: number, finance_knowledge: number, cog_bias_resistance: number) {
    this.time_flexibility = time_flexibility;
    this.fin_risk_tolerance = fin_risk_tolerance;
    this.psy_risk_tolerance = psy_risk_tolerance;
    this.finance_knowledge = finance_knowledge;
    this.cog_bias_resistance = cog_bias_resistance;
  }
}

