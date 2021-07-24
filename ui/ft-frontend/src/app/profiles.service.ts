import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {McQuestionnaire} from "./questionnaire.service";
import {HttpClient} from "@angular/common/http";

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


  constructor(name: string, description: string, tags: string[], reason: string) {
    this.name = name;
    this.description = description;
    this.tags = tags;
    this.reason = reason;
  }
}