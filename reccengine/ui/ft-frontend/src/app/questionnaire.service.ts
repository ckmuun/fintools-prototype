import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, ReplaySubject} from "rxjs";
import {catchError, shareReplay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {


  private dataSubject = new ReplaySubject<McQuestionnaire>(1);

  data$: Observable<McQuestionnaire> = this.dataSubject.asObservable();

  constructor(private httpClient: HttpClient) {
  }


  /*3
    TODO implement caching service that dynamically returns an observalbe from either
    the request output or the cached values, and caches the values upon request.
   */


  getQuestionnaires(): Observable<McQuestionnaire[]> {
    return this.httpClient.get<McQuestionnaire[]>("http://localhost:8080/api/questionnaires/all")
  }
  getQuestionnaireList(): Observable<string[]> {
    return this.httpClient.get<string[]>("http://localhost:8080/api/questionnaires")
  }

  /*
  fetch() {
    return this.httpClient.get<McQuestionnaire[]>("http://localhost:8080/api/questionnaires")
      .subscribe(res => this.dataSubject.next(res))
  }

   */





}

export class McQuestionnaire {

  constructor(category: string,
              description: string,
              questions: McQuestion[]) {

    this.category = category;
    this.description = description;
    this.questions = questions;
  }

  category: string
  description: string
  questions: McQuestion[]

}

export class Metadata {
  public category: string


  constructor(category: string) {
    this.category = category;
  }
}


export class McQuestion {

  public metadata: Metadata

  public answers_to_show: McAnswer[]
  public question_text: string
  public chosen_answer_ndex: number


  constructor(metadata: Metadata, answersToShow: McAnswer[], questionText: string, chosenAnswerIndex: number) {
    this.metadata = metadata;
    this.answers_to_show = answersToShow;
    this.question_text = questionText;
    this.chosen_answer_ndex = chosenAnswerIndex;
  }


}

export class McAnswer {
  public answer_text: string
  public value: number


  constructor(answerText: string, value: number) {
    this.answer_text = answerText;
    this.value = value;
  }
}
