import { Component, OnInit } from '@angular/core';
import {QuestionnaireService} from "../questionnaire.service";

@Component({
  selector: 'app-entrypoint',
  templateUrl: './entrypoint.component.html',
  styleUrls: ['./entrypoint.component.css']
})
export class EntrypointComponent implements OnInit {

  qCategories: string[];

  constructor(private qSvc: QuestionnaireService) {
    this.qCategories =  [];
  }

  ngOnInit(): void {

    console.log("init entrypoint component")
    this.qCategories = this.qSvc.getQuestionnaireList()

  }

  refresh() {
    this.qCategories = this.qSvc.getQuestionnaireList()

  }
}
