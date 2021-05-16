import {Component, Inject, OnInit} from '@angular/core';
import {QuestionnaireService} from "../questionnaire.service";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  private qSvc: QuestionnaireService


  constructor(@Inject(QuestionnaireService) qSvc: QuestionnaireService) {
    this.qSvc = qSvc
}



get qCategoryList () {
    return this.qSvc.getQuestionnaireList();
}

ngOnInit() {

  }
}
