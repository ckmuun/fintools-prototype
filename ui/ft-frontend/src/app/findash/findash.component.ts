  import {Component, OnInit} from '@angular/core';

  import {ChartOptions, ChartType, ChartDataset, ChartData} from 'chart.js'
  import {BaseChartDirective} from "ng2-charts";
  import DataLabelsPlugin from 'chartjs-plugin-datalabels';

  import {MatGridTile} from "@angular/material/grid-list";
  import {FintoolRecomDto, ScoreContainer, StrategyService} from "../strategy.service";


@Component({
  selector: 'app-findash',
  templateUrl: './findash.component.html',
  styleUrls: ['./findash.component.css']
})

export class FindashComponent implements OnInit {

  // dirty initializer hack
  data: FintoolRecomDto = {} as any

  userScoreArr: number[] = []

  constructor(private strategySvc: StrategyService) {

  }

  ngOnInit(): void {
    this.strategySvc.data$.subscribe(
      resp => {
        this.data = resp;
        this.userScoreArr = this.getNumberArray(resp.user_scores)
      }
    )
  }


  /*
    Based on: export const radarchartLabels: string[] = ['TimeFlexibility', 'Financial Risk Tolerance', 'Psychological Risk Tolerance', 'Cognitive Bias Resistance', 'Finance Knowledge'];

   */
  getNumberArray(sc: ScoreContainer): number[] {

    return [sc.time_flexibility, sc.fin_risk_tolerance, sc.psy_risk_tolerance, sc.cog_bias_resistance, sc.finance_knowledge]
  }
}
