import { Component, OnInit } from '@angular/core';
import {QuestionnaireService} from "../questionnaire.service";

@Component({
  selector: 'app-entrypoint',
  templateUrl: './entrypoint.component.html',
  styleUrls: ['./entrypoint.component.css']
})
export class EntrypointComponent implements OnInit {

  questionnaires: string[];

  constructor(private qSvc: QuestionnaireService) {
    this.questionnaires = this.qSvc.getQuestionnaireList()

  }

  ngOnInit(): void {

  }

}
