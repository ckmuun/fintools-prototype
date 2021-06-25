import {Component, Inject, OnInit} from '@angular/core';
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import {radarchartLabels} from "../ftconstants";


@Component({
  selector: 'app-stratcompare',
  templateUrl: './stratcompare.component.html',
  styleUrls: ['./stratcompare.component.css']
})

/*
    This component serves a comparison chart between the user's answers and a given strategy
    in practice, these strategies are returned from the backend.
 */
export class StratcompareComponent implements OnInit {

  answers: number[]
  strategyScores: number[]

  chartData: ChartData<'radar'>;

  constructor( answers1: number[], strategyScores: number[]) {
    this.answers = [];
    this.strategyScores = []// strategyScores;

    this.chartData = this.genData();
  }

  ngOnInit(): void {
    this.recolor()
  }

  // Radar
  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  /*
    public radarChartData: ChartData<'radar'> = {
      labels: radarchartLabels,
      datasets: [
        {data: [65, 59, 10, 81, 15], label: 'Series A'},
        {data: [28, 48, 40, 19, 60], label: 'Series B'},
      ]
    };
   */

  public genData(): ChartData<'radar'> {
    return {
      labels: radarchartLabels,
      datasets: [
        {data: this.answers, label: 'User Answers'},
        {data: this.strategyScores, label: 'Strategy Values'},
      ]
    }
  }

  /*
      TODO define proper colouring here
   */
  public recolor(): void {
    this.chartData.datasets[0].backgroundColor = '#507783'
    this.chartData.datasets[0].borderColor = 'blue'
  }

  public radarChartType: ChartType = 'radar';

  // events
  public chartClicked({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
