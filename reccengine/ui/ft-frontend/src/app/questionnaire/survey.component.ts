import {Component, Inject, OnInit} from '@angular/core';
import {QuestionnaireService} from "../questionnaire.service";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

   qSvc: QuestionnaireService


  constructor(@Inject(QuestionnaireService) qSvc: QuestionnaireService) {
    this.qSvc = qSvc
}



get qCategoryList () {
    return this.qSvc.getQuestionnaireList();
}

ngOnInit() {


  }
}
