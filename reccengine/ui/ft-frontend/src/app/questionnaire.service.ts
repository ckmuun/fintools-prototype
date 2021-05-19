import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  qCategories: string[];
  questionnaires: mcQuestionnaire[]


  constructor(private httpClient: HttpClient) {

    this.qCategories = []
    this.questionnaires = []

  }

  getQuestionnaireList(): string[] {

    if (this.qCategories.length === 0) {
      this.getQuestionnaireListReq().subscribe(
        cat => {
          this.qCategories = cat
          console.log("categories:" + this.qCategories)
        }
      );


    }

    return this.qCategories
  }

  private getQuestionnaireListReq(): Observable<string[]> {
    console.log("fetching questionnaire list")
    return this.httpClient.get<string[]>("http://localhost:8080/api/questionnaires")
  }

  getQuestionnaires(): mcQuestionnaire[] {
    if (this.questionnaires.length !== 0) {
      return this.questionnaires
    }

    console.log("fetching: "+ this.qCategories)

    for (let q of this.qCategories) {
      this.httpClient.get<mcQuestionnaire>("http://localhost:8080/api/questionnaires/" + q)
        .subscribe(questionnaire => this.questionnaires.push(questionnaire))
    }
    console.log("got questionnaires: " + this.questionnaires)
    return this.questionnaires;
  }
}

export class mcQuestionnaire {

  constructor(category: string,
              description: string,
              questions: mcQuestion[]) {

    this.category = category;
    this.description = description;
    this.questions = questions;
  }

  category: string
  description: string
  questions: mcQuestion[]

}

export class mcQuestion {


}
