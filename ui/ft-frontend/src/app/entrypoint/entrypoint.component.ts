import {Component, OnInit} from '@angular/core';
import {McQuestionnaire, QuestionnaireService} from "../questionnaire.service";
import {StrategyService} from "../strategy.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProfilesService} from "../profiles.service";
import {ExplanationDialogComponent} from "../explanation-dialog/explanation-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {NextPageDialogComponent} from "../next-page-dialog/next-page-dialog.component";

@Component({
  selector: 'app-entrypoint',
  templateUrl: './entrypoint.component.html',
  styleUrls: ['./entrypoint.component.css']
})
export class EntrypointComponent implements OnInit {


  // ##### Domain and application imports #####
  questionnaires: McQuestionnaire[];
  showSubmitModal: boolean = false;

  qCategories: string[];

  constructor(private qSvc: QuestionnaireService,
              private stratSvc: StrategyService,
              private profilesSvc: ProfilesService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) {
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
        this.questionnaires = q
      }
    )

    this.qSvc.getQuestionnaireList().subscribe(
      categories => this.qCategories = categories
    )
    this.openDialog();

  }

  openDialog() {
    this.dialog.open(ExplanationDialogComponent, {
      data: {
        text: "This page displays various questions which we use to further narrow down recommendations for you." +
          "Please answer them correctly to optimize your results. You may be surprised at the 'non-financial' questions. " +
          "This is on purpose and a major aspect of why this recommendation site is different from other, sales-driven ones."
      }
    });
  }

  openNextPageDialog(): void {
    let matDialogRef = this.dialog.open(NextPageDialogComponent, {
      data: {
        text: "",
        redirectUri: "/dashboard"
      }
    })

    const sub = matDialogRef.componentInstance.buttonClicked.subscribe(
      () => {
        this.uploadFilledQuestionnaires();
      }
    )

    matDialogRef.afterClosed().subscribe(
      sub.unsubscribe
    )

  }

  navigateToFindash() {
    this.router.navigateByUrl('/dashboard')
  }

  uploadFilledQuestionnaires() {

    return this.stratSvc.postFilledQuestionnaires(this.questionnaires, this.profilesSvc.chosenProfile).subscribe(
      response => {
        console.log("received upload response, routing to dashboard component")
        console.log("response:" + response.id)
        this.stratSvc.currentUserId = response.id
        this.navigateToFindash()
      }
    )
  }

  setAnswerIndex(questionnaireIndex: number, questionIndex: number, answerIndex: number) {
    console.log("setting chosen answer in questionnaire: " + questionnaireIndex + "\n question: " + questionIndex + "\n to answer at index: " + answerIndex)

    this.questionnaires[questionnaireIndex]
      .questions[questionIndex]
      .chosen_answer_index = answerIndex

    if (this.allQuestionnairesFilled()) {
      this.openNextPageDialog()
    }
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

  // DEBUG ONLY
  fillQuestionnairesWithDefault() {
    for (let i = 0; i < this.questionnaires.length; i++) {
      let q = this.questionnaires[i];
      for (let ii = 0; ii < q.questions.length; ii++) {
        let qq = q.questions[ii];

        this.questionnaires[i].questions[ii].chosen_answer_index = 1;
      }
    }
    if (this.allQuestionnairesFilled()) {
      this.openNextPageDialog()
    }
    // this.uploadFilledQuestionnaires()
  }

}
