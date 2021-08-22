import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {McQuestionnaire} from "./questionnaire.service";
import {HttpClient} from "@angular/common/http";
import {ScoreContainer} from "./strategy.service";

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  chosenProfile: UserProfile;

  constructor(private httpClient: HttpClient) {
    this.chosenProfile = new UserProfile(
      "default",
      "default",
      ["default"],
      "default",
      0, 0, 0, 0, 0
    )
  }

  getQuestionnaires(): Observable<UserProfile[]> {
    return this.httpClient.get<UserProfile[]>("http://localhost:8080/api/profiles")
  }

  cacheChosenProfile(profile: UserProfile) {
    this.chosenProfile = profile;
  }

  getChosenProfile() {
    return this.chosenProfile
  }

  /*
  GO STRUCT
  type UserProfile struct {
Name        string   `json:"name"`
Description string   `json:"description"`
Tags        []string `json:"tags"`
Reason      string   `json:"reason"`
}
 */
}

// public fields for JSON SerDes
export class UserProfile {
  name: string
  description: string
  tags: string[]
  reason: string
  score_container: ScoreContainer

  time_flexibility: number
  fin_risk_tolerance: number
  psy_risk_tolerance: number
  financial_knowledge: number
  cog_bias_resistance: number


  constructor(name: string,
              description: string,
              tags: string[],
              reason: string,
              time_flexibility: number,
              fin_risk_tolerance: number,
              psy_risk_tolerance: number,
              financial_knowledge: number,
              cog_bias_resistance: number,
  ) {
    this.name = name;
    this.description = description;
    this.tags = tags;
    this.reason = reason;
    this.time_flexibility = time_flexibility;
    this.fin_risk_tolerance = fin_risk_tolerance;
    this.psy_risk_tolerance = psy_risk_tolerance;
    this.financial_knowledge = financial_knowledge;
    this.cog_bias_resistance = cog_bias_resistance;

    this.score_container = new ScoreContainer(
      this.time_flexibility,
      this.fin_risk_tolerance,
      this.psy_risk_tolerance,
      this.financial_knowledge,
      this.cog_bias_resistance,
    )



  }
  getAsNumberArr() :number[] {
    return [this.time_flexibility, this.fin_risk_tolerance, this.psy_risk_tolerance, this.cog_bias_resistance, this.financial_knowledge]

  }

}
