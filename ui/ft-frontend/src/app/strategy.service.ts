import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {McQuestionnaire} from "./questionnaire.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StrategyService {

  private _data$: Observable<FintoolRecomDto>;

  constructor(private httpClient: HttpClient) {

    this._data$ = new Observable<any>();
  }


  postFilledQuestionnaires(questionnaires: McQuestionnaire[]): Observable<FintoolRecomDto> {
    this._data$ = this.httpClient.post<FintoolRecomDto>("http://localhost:8080/api/questionnaires/submit", questionnaires)
    return this._data$
  }


  get data$(): Observable<FintoolRecomDto> {
    return this._data$;
  }

  set data$(value: Observable<FintoolRecomDto>) {
    this._data$ = value;
  }
}

/*
    The DTO that is returned from backend, it encapsulates a recommendation and an id
 */
export class FintoolRecomDto {

  constructor(good_recommendation: FintoolRecom,
              bad_recommendation: FintoolRecom,
              id: string,
              user_scores: ScoreContainer
  ) {
    this.good_recommendation = good_recommendation;
    this.bad_recommendation = bad_recommendation;
    this.id = id;
    this.user_scores = user_scores
  }

  id: string
  good_recommendation: FintoolRecom
  bad_recommendation: FintoolRecom
  user_scores: ScoreContainer
}

/*
    The actual recommendation, encapsulating the components#
    BAsed on:
    type FintoolRecom struct {
	RecommendedComponents [3]StrategyComponent `json:"recommended_components"`
	WildcardComponent     StrategyComponent    `json:"wildcard_component"`
}

 */
export class FintoolRecom {

  constructor(recommended_components: StrategyComponent[], wildcard_component: StrategyComponent) {
    this.recommended_components = recommended_components;
    this.wildcard_component = wildcard_component;
  }

  recommended_components: StrategyComponent[]
  wildcard_component: StrategyComponent
}

/*
    An actual personal finance strategy component, this encapsulates the raw numerical category stores
 */
export class StrategyComponent {

  time_flexibility: number
  fin_risk_tolerance: number
  psy_risk_tolerance: number
  finance_knowledge: number
  cog_bias_resistance: number

  score_container: ScoreContainer

  constructor(description: string,
              time_flexibility: number,
              fin_risk_tolerance: number,
              psy_risk_tolerance: number,
              finance_knowledge: number,
              cog_bias_resistance: number,
  ) {
    this.description = description;

    this.time_flexibility = time_flexibility
    this.fin_risk_tolerance = fin_risk_tolerance
    this.psy_risk_tolerance = psy_risk_tolerance
    this.finance_knowledge = finance_knowledge
    this.cog_bias_resistance = cog_bias_resistance

    this.score_container = new ScoreContainer(
      this.time_flexibility,
      this.fin_risk_tolerance,
      this.psy_risk_tolerance,
      this.finance_knowledge,
      this.cog_bias_resistance,
    )
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


  constructor(time_flexibility: number,
              fin_risk_tolerance: number,
              psy_risk_tolerance: number,
              finance_knowledge: number,
              cog_bias_resistance: number) {
    this.time_flexibility = time_flexibility;
    this.fin_risk_tolerance = fin_risk_tolerance;
    this.psy_risk_tolerance = psy_risk_tolerance;
    this.finance_knowledge = finance_knowledge;
    this.cog_bias_resistance = cog_bias_resistance;
  }

  /*
    Based on: export const radarchartLabels: string[] = ['TimeFlexibility', 'Financial Risk Tolerance', 'Psychological Risk Tolerance', 'Cognitive Bias Resistance', 'Finance Knowledge'];

   */
}

