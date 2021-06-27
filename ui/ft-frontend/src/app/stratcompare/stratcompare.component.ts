import {Component, Inject, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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
export class StratcompareComponent implements OnInit, OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    console.log("on changes ...")
    this.radarChartData = this.initRadarChartData()
  }

  @Input() userScores: number[] = [];
  @Input() strategyScores: number[] = [];

  radarChartData: ChartData<'radar'> = {} as any;

  constructor() {

  }

  ngOnInit(): void {
    this.radarChartData = this.initRadarChartData();
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

  public initRadarChartData(): ChartData<'radar'> {

    console.log("user scores: "+ this.userScores)
    console.log("strategy scores: "+ this.strategyScores)

    return {
      labels: radarchartLabels,
      datasets: [
        {data: this.userScores, label: 'User Answers'},
        {data: this.strategyScores, label: 'Strategy Values'},
      ]
    }
  }

  /*
      TODO define proper colouring here
   */
  public recolor(): void {
    this.radarChartData.datasets[0].backgroundColor = '#507783'
    this.radarChartData.datasets[0].borderColor = '#507783'

    this.radarChartData.datasets[1].backgroundColor = '#F1E978'
    this.radarChartData.datasets[1].borderColor = '#F1E978'


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
