import {Component, OnInit} from '@angular/core';

import {ChartOptions, ChartType, ChartDataset, ChartData} from 'chart.js'
import {BaseChartDirective} from "ng2-charts";
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

import {MatGridTile} from "@angular/material/grid-list";
import {FintoolRecomDto, ScoreContainer, StrategyComponent, StrategyService} from "../strategy.service";
import {dashCaseToCamelCase} from "@angular/compiler/src/util";
import {ActivatedRoute, Router} from "@angular/router";
import {ExplanationDialogComponent} from "../explanation-dialog/explanation-dialog.component";
import {MatDialog} from "@angular/material/dialog";


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


  constructor(private strategySvc: StrategyService, private route: ActivatedRoute, private router: Router, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.strategySvc.data$.subscribe(
      resp => {
        this.data = resp;
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

  openNextPageDialog() {

  }


  navigateToDiscovery() {
    this.router.navigateByUrl('/discover')
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
