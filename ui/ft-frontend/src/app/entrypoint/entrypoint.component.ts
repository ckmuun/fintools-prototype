import {Component, OnInit} from '@angular/core';
import {McQuestionnaire, QuestionnaireService} from "../questionnaire.service";
import {StrategyService} from "../strategy.service";

@Component({
  selector: 'app-entrypoint',
  templateUrl: './entrypoint.component.html',
  styleUrls: ['./entrypoint.component.css']
})
export class EntrypointComponent implements OnInit {

  questionnaires: McQuestionnaire[];

  showSubmitModal: boolean = false;

  qCategories: string[];

  constructor(private qSvc: QuestionnaireService, private stratSvc: StrategyService ) {
    this.qCategories = [];
    this.questionnaires = [];
  }

  getTitle(): string {
    return "Questionnaires:"
  }

  getSelected(questionnaireIndex: number, questionIndex: number, answerIndex: number): boolean {
    return this.questionnaires[questionnaireIndex]
      .questions[questionIndex]
      .chosen_answer_index === answerIndex;
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

  openSubmitModal() {

    if(this.allQuestionnairesFilled()) {
      this.showSubmitModal = true
    } else {
      // todo display some "not all questionnnaires filled warning"
    }
    // todo open submit modal here
    return
  }

  uploadFilledQuestionnaires() {

    return
  }

  get questionnaires$() {

    return this.qSvc.data$.subscribe(
      questionnaires => questionnaires
    )
  }

  setAnswerIndex(questionnaireIndex: number, questionIndex: number, answerIndex: number) {
    console.log("setting chosen answer in questionnaire: " + questionnaireIndex + "\n question: " + questionIndex + "\n to answer at index: " + answerIndex)

    this.questionnaires[questionnaireIndex]
      .questions[questionIndex]
      .chosen_answer_index = answerIndex
  }

  allQuestionnairesFilled(): boolean {
    if (this.questionnaires.length === 0) {
      return false;
    }

    for (let i = 0; i < this.questionnaires.length; i++) {
      let q = this.questionnaires[i];
      for (let ii = 0; ii < q.questions.length; ii++) {
        let qq = q.questions[ii];

        // -1 is the default index set by backend
        if (qq.chosen_answer_index === -1) {
          return false;
        }
      }
    }
    return true;
  }

}
