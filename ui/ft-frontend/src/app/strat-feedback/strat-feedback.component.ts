import {Component, Input, OnInit} from '@angular/core';
import {StrategyComponent} from "../strategy.service";

@Component({
  selector: 'app-strat-feedback',
  templateUrl: './strat-feedback.component.html',
  styleUrls: ['./strat-feedback.component.css']
})
export class StratFeedbackComponent implements OnInit {

  @Input() strategy: StrategyComponent = {} as any;


  constructor() { }

  ngOnInit(): void {
  }

}
