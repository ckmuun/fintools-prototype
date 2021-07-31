
import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChartConfiguration, ChartData, ChartOptions, ChartType, RadarControllerChartOptions} from "chart.js";
import {radarchartLabels} from "../ftconstants";
import {FintoolRecomDto, ScoreContainer, StrategyService} from "../strategy.service";

@Component({
  selector: 'app-skillradar',
  templateUrl: './skillradar.component.html',
  styleUrls: ['./skillradar.component.css']
})
export class SkillradarComponent implements OnInit, OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    console.log("on changes ...")
    this.radarChartData = this.initRadarChartData()
    this.recolor();
  }

  @Input() userScores: number[] = [];

  @Input() profileScores: number[]  = [];

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
          {data: this.profileScores, label: "Profile You Selected"},
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

    this.radarChartData.datasets[1].backgroundColor = 'rgba(255, 102, 0, 0.17)'
    this.radarChartData.datasets[1].borderColor = '#ff6600'

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
