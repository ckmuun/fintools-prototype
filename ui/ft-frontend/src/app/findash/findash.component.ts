import {Component, OnInit} from '@angular/core';

import {FintoolRecomDto, ScoreContainer, StrategyComponent, StrategyService} from "../strategy.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ExplanationDialogComponent} from "../explanation-dialog/explanation-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {NextPageDialogComponent} from "../next-page-dialog/next-page-dialog.component";
import {ProfilesService} from "../profiles.service";
import {FeedbackService, StrategyFeedbackDto} from "../feedback.service";


@Component({
  selector: 'app-findash',
  templateUrl: './findash.component.html',
  styleUrls: ['./findash.component.css']
})

export class FindashComponent implements OnInit {

  // dirty initializer hack
  data: FintoolRecomDto = {} as any

  userScoreArr: number[] = []
  goodRecomStrats: StrategyComponent[] = [];
  goodStratArrs: number[][] = [];
  rawFeedback: number[] = [-1, -1, -1];
  allRated: boolean = false;

  constructor(private strategySvc: StrategyService, private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog,
              public profilesService: ProfilesService,
              public feedbackService: FeedbackService
  ) {
  }

  // abusing array with two slots as a tuplem, 0 is the rating, 1 is the strategy index
  collectFeedback(tuple: number[]) {
    console.log("saving feedback")
    this.rawFeedback[tuple[1]] = tuple[0];

    console.log("strategy nr. " + tuple[1] + " got rating: " + tuple[0]);

    this.allRated = this.checkIfFeedbackComplete();

    if (this.allRated) {
      this.openNextPageDialog()
    }
  }

  convertRawFeedbackToDto(): StrategyFeedbackDto[] {

    let feedback: StrategyFeedbackDto[] = []

    for (let i = 0; i < 3; i++) {
      feedback[i] = new StrategyFeedbackDto(
        this.rawFeedback[i],
        this.goodRecomStrats[i].name,
        this.data.id
      )
    }

    return feedback
  }

  checkIfFeedbackComplete(): boolean {
    for (let i = 0; i < this.rawFeedback.length; i++) {
      if (this.rawFeedback[i] === -1) {
        return false;
      }
    }
    return true
  }

  ngOnInit(): void {
    this.strategySvc.data$.subscribe(
      resp => {
        this.data = resp;
        this.data.id = this.strategySvc.currentUserId
        this.userScoreArr = this.getNumberArray(resp.user_scores)
        this.goodRecomStrats = this.data.good_recommendation.recommended_components
        this.extractStrategyScores(this.goodRecomStrats)

        /*
            DEBUG LOG OUTPUT
         */
        this.goodRecomStrats.forEach(
          strat => {
            console.log("strategy: " + strat.name)
            console.log("has scores: " + this.getNumberArrayFromStrategy(strat));
            // init feedback array
          }
        )
      }
    );
    this.openDialog();
  }

  extractStrategyScores(scs: StrategyComponent[]) {
    scs.forEach(
      strategy => {
        this.goodStratArrs.push([strategy.time_flexibility, strategy.fin_risk_tolerance, strategy.psy_risk_tolerance, strategy.cog_bias_resistance, strategy.financial_knowledge])
      }
    );
  }

  openDialog() {
    this.dialog.open(ExplanationDialogComponent, {
      data: {
        text: "This page displays personal finance strategies which were  selected based on your questionnaire answers for you." +
          " \n Please also rate these strategies. by clicking on the stars on the right"
      }
    });
  }

  openNextPageDialog(): void {
    this.feedbackService.persistFeedback(
      this.convertRawFeedbackToDto()
    )

      .subscribe(resp => {
        this.dialog.open(NextPageDialogComponent, {
          data: {
            text: "",
            redirectUri: "/discover"
          }
        })
      })
  }

  navigateToDiscovery() {
    this.feedbackService.persistFeedback(this.convertRawFeedbackToDto()).subscribe(
      resp => {
        console.log("navigating to discover")
        return this.router.navigateByUrl('/discover');
      })
  }

  /*
    Based on: export const radarchartLabels: string[] = ['TimeFlexibility', 'Financial Risk Tolerance', 'Psychological Risk Tolerance', 'Cognitive Bias Resistance', 'Finance Knowledge'];
   */
  getNumberArray(sc: ScoreContainer): number[] {

    return [sc.time_flexibility, sc.fin_risk_tolerance, sc.psy_risk_tolerance, sc.cog_bias_resistance, sc.financial_knowledge]
  }

  getNumberArrayFromStrategy(strat: StrategyComponent): number[] {

    return [strat.time_flexibility, strat.fin_risk_tolerance, strat.psy_risk_tolerance, strat.cog_bias_resistance, strat.financial_knowledge]
  }
}
