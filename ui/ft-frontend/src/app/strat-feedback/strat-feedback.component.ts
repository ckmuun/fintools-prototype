import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StrategyComponent} from "../strategy.service";

@Component({
  selector: 'app-strat-feedback',
  templateUrl: './strat-feedback.component.html',
  styleUrls: ['./strat-feedback.component.css']
})
export class StratFeedbackComponent implements OnInit {

  @Input() strategy: StrategyComponent = {} as any;
  @Input() strategyIndex: number = -1;


  rating: number = 2.5;
  rated: boolean = false;

  @Output() stratRatedEmitter: EventEmitter<number[]> = new EventEmitter<number[]>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onRatingSet(rating: number) {
    this.rated = true;
    this.rating = rating;
    this.stratRatedEmitter.emit([this.rating, this.strategyIndex])
  }
}
