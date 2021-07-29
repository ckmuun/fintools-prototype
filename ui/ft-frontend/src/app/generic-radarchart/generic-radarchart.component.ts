import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChartData, ChartOptions, ChartType} from "chart.js";
import {radarchartLabels} from "../ftconstants";
import {ScoreContainer} from "../strategy.service";

@Component({
  selector: 'app-generic-radarchart',
  templateUrl: './generic-radarchart.component.html',
  styleUrls: ['./generic-radarchart.component.css']
})

export class GenericRadarchartComponent implements OnInit, OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    console.log("on changes ...")
    this.radarChartData = this.initRadarChartData()
    this.recolor();
  }

  @Input() userScores: number[] = [];

  @Input() label: string = "Your Answers"; // default value

  // @ts-ignore
  @Input() userScoreContainer: ScoreContainer;

  radarChartData: ChartData<'radar'> = {} as any

  constructor() {

  }

  ngOnInit(): void {
    console.log("initializing radar chart data")
    this.radarChartData = this.initRadarChartData();
    this.recolor();
  }

  public options: ChartOptions = {
    responsive: true,
    scales: {
      radial: {
        beginAtZero: true,
        max: 10,
        min: 0,
        ticks: {
          stepSize: 1

        }
      }
    }
  }

  public initRadarChartData(): ChartData<'radar'> {
    if (null === this.userScoreContainer || undefined === this.userScoreContainer) {
      return {
        labels: radarchartLabels,
        datasets: [
          {data: this.userScores, label: this.label},
        ]
      };
    }
    return {
      labels: radarchartLabels,
      datasets :[
        {data : this.getNumberArray(this.userScoreContainer), label: this.label}
      ]
    };
  }

  public recolor(): void {
    this.radarChartData.datasets[0].backgroundColor = 'rgba(90, 123, 170, 0.17)'
    this.radarChartData.datasets[0].borderColor = '#507783'
  }

  public radarChartType: ChartType = 'radar';

  // events
  public chartClicked({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({event, active}: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


  getNumberArray(sc: ScoreContainer): number[] {

    return [sc.time_flexibility, sc.fin_risk_tolerance, sc.psy_risk_tolerance, sc.cog_bias_resistance, sc.financial_knowledge]
  }


}
