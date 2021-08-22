import {Component, Input, OnInit} from '@angular/core';
import {StrategyComponent} from "../strategy.service";

@Component({
  selector: 'app-strat-details',
  templateUrl: './strat-details.component.html',
  styleUrls: ['./strat-details.component.css']
})
export class StratDetailsComponent implements OnInit {

  @Input() strategy: StrategyComponent = {} as any;

  constructor() {
  }


  ngOnInit(): void {
  }

}
