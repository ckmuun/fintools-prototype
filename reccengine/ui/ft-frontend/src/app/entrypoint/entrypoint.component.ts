import {Component, OnInit} from '@angular/core';
import {McQuestionnaire, QuestionnaireService} from "../questionnaire.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-entrypoint',
  templateUrl: './entrypoint.component.html',
  styleUrls: ['./entrypoint.component.css']
})
export class EntrypointComponent implements OnInit {

  questionnaires: McQuestionnaire[]

  qCategories: string[];

  constructor(private qSvc: QuestionnaireService) {
    this.qCategories = [];
    this.questionnaires = [];
  }

  ngOnInit(): void {
    console.log("init entrypoint component")
    this.qSvc.getQuestionnaires().subscribe(
      q => {
        //  console.log(JSON.stringify(q))
        this.questionnaires = q
      }
    )

    this.qSvc.getQuestionnaireList().subscribe(
      categories => this.qCategories = categories
    )
  }

  get questionnaires$() {

    return this.qSvc.data$.subscribe(
      questionnaires => questionnaires
    )
  }

  setAnswerIndex(questionnaireIndex: number, questionIndex: number, answerIndex: number) {

    this.questionnaires[questionIndex]
      .questions[questionIndex]
      .chosen_answer_index = answerIndex
  }

}
