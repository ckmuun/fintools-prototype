import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  qCategories: string[];

  constructor(private httpClient: HttpClient) {

    this.qCategories = []
    this.getQuestionnaireListReq().subscribe(
      data => {
        console.log("data: " + data)

        this.qCategories = JSON.parse(data)

      }
  )

    console.log(this.qCategories)
  }

  getQuestionnaireList(): string[]  {

    /*
    if (this.qCategories.length === 0) {
       this.getQuestionnaireListReq().subscribe(
        cat =>  {
          this.qCategories.concat(cat)
        }
      );


    }
    */

    return this.qCategories
  }

  private getQuestionnaireListReq() {
    console.log("fetching questionnaire list")
    //return this.httpClient.get<string>("http://localhost:8080/api/ping")
    return this.httpClient.get<string>("http://localhost:8080/api/questionnaires")
   // return this.httpClient.get<string>("http://localhost:3000/todo")
  }

  getQuestionnaires() {

  }
}
