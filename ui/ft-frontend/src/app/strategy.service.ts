import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {McQuestionnaire} from "./questionnaire.service";
import {HttpClient} from "@angular/common/http";
import {UserProfile} from "./profiles.service";

@Injectable({
  providedIn: 'root'
})
export class StrategyService {

  private _data$: Observable<FintoolRecomDto>;

  private _stratSampleData$: Observable<StrategyComponent[]>

  constructor(private httpClient: HttpClient) {

    this._data$ = new Observable<any>();
    this._stratSampleData$ = new Observable<any>();
  }

  postFilledQuestionnaires(questionnaires: McQuestionnaire[], profile: UserProfile): Observable<FintoolRecomDto> {

    this._data$ = this.httpClient.post<FintoolRecomDto>(
      "http://localhost:8080/api/questionnaires/submit",
      new SubmitDto(
        questionnaires,
        profile
      ))
    return this._data$
  }

  getRandomStrategySample(): Observable<StrategyComponent[]> {
    this._stratSampleData$ = this.httpClient.get<StrategyComponent[]>("http://localhost:8080/api/random")
    return this._stratSampleData$
  }

  get data$(): Observable<FintoolRecomDto> {
    return this._data$;
  }

  set data$(value: Observable<FintoolRecomDto>) {
    this._data$ = value;
  }


  get stratSampleData$(): Observable<StrategyComponent[]> {
    return this._stratSampleData$;
  }

  set stratSampleData$(value: Observable<StrategyComponent[]>) {
    this._stratSampleData$ = value;
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

 */

export class SubmitDto {

  questionnaires: McQuestionnaire[]
  profile: UserProfile


  constructor(questionnaires: McQuestionnaire[], profile: UserProfile) {
    this.questionnaires = questionnaires;
    this.profile = profile;
  }
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
  financial_knowledge: number
  cog_bias_resistance: number

  score_container: ScoreContainer
  description: string;
  name: string;

  links: string[] = [];
  tags: string[] = [];
  major_pros: string[] = [];
  major_cons: string[] = [];

  constructor(description: string,
              name: string,
              time_flexibility: number,
              fin_risk_tolerance: number,
              psy_risk_tolerance: number,
              financial_knowledge: number,
              cog_bias_resistance: number,
              links: string[],
              tags: string[],
              major_pros: string[],
              major_cons: string[],
  ) {
    this.description = description;


    this.time_flexibility = time_flexibility;
    this.fin_risk_tolerance = fin_risk_tolerance;
    this.psy_risk_tolerance = psy_risk_tolerance;
    this.financial_knowledge = financial_knowledge;
    this.cog_bias_resistance = cog_bias_resistance;
    this.name = name;
    this.links = links;
    this.tags = tags;
    this.major_cons = major_cons;
    this.major_pros = major_pros;

    this.score_container = new ScoreContainer(
      this.time_flexibility,
      this.fin_risk_tolerance,
      this.psy_risk_tolerance,
      this.financial_knowledge,
      this.cog_bias_resistance,
    )
  }
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
  financial_knowledge: number
  cog_bias_resistance: number


  constructor(time_flexibility: number,
              fin_risk_tolerance: number,
              psy_risk_tolerance: number,
              financial_knowledge: number,
              cog_bias_resistance: number) {
    this.time_flexibility = time_flexibility;
    this.fin_risk_tolerance = fin_risk_tolerance;
    this.psy_risk_tolerance = psy_risk_tolerance;
    this.financial_knowledge = financial_knowledge;
    this.cog_bias_resistance = cog_bias_resistance;
  }

}

