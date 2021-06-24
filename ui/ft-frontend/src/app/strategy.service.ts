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

  constructor(recommendation: FintoolRecom,
              id: string,
              user_scores: ScoreContainer
  ) {

    this._recommendation = recommendation;
    this._id = id;
    this._user_scores = user_scores
  }

  private _id: string
  private _recommendation: FintoolRecom
  private _user_scores: ScoreContainer


  get id(): string {
    return this._id;
  }

  get recommendation(): FintoolRecom {
    return this._recommendation;
  }

  get user_scores(): ScoreContainer {
    return this._user_scores;
  }
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
  private _time_flexibility: number
  private _fin_risk_tolerance: number
  private _psy_risk_tolerance: number
  private _finance_knowledge: number
  private _cog_bias_resistance: number


  constructor(time_flexibility: number,
              fin_risk_tolerance: number,
              psy_risk_tolerance: number,
              finance_knowledge: number,
              cog_bias_resistance: number) {
    this._time_flexibility = time_flexibility;
    this._fin_risk_tolerance = fin_risk_tolerance;
    this._psy_risk_tolerance = psy_risk_tolerance;
    this._finance_knowledge = finance_knowledge;
    this._cog_bias_resistance = cog_bias_resistance;
  }

  get time_flexibility(): number {
    return this._time_flexibility;
  }

  get fin_risk_tolerance(): number {
    return this._fin_risk_tolerance;
  }

  get psy_risk_tolerance(): number {
    return this._psy_risk_tolerance;
  }

  get finance_knowledge(): number {
    return this._finance_knowledge;
  }

  get cog_bias_resistance(): number {
    return this._cog_bias_resistance;
  }
}

