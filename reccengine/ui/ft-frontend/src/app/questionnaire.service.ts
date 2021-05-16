import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  qCategories: string[];

  constructor(private httpClient: HttpClient) {

    this.qCategories = []

  }

  getQuestionnaireList(): string[]  {

    if (this.qCategories.length === 0) {
       this.getQuestionnaireListReq().subscribe(
        cat =>  {
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

  getQuestionnaires() {

  }
}
