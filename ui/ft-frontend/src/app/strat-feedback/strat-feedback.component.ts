import {Component, Input, OnInit} from '@angular/core';
import {StrategyComponent} from "../strategy.service";

@Component({
  selector: 'app-strat-feedback',
  templateUrl: './strat-feedback.component.html',
  styleUrls: ['./strat-feedback.component.css']
})
export class StratFeedbackComponent implements OnInit {

  @Input() strategy: StrategyComponent = {} as any;

  ratingDisplay: number = 2.5;
  rated: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onRatingSet(rating: number): void {
    this.rated = true;
    this.ratingDisplay = rating;
  }
}
