import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChartConfiguration, ChartData, ChartType, RadarControllerChartOptions} from "chart.js";
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
  }


  @Input() datapoints: number[] = [];

  radarChartData: ChartData<'radar'> = {} as any


  constructor() {

  }

  ngOnInit(): void {
    console.log("initializing radar chart data")
    this.radarChartData = this.initRadarChartData();
    this.recolor();
  }

  // Radar
  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  public initRadarChartData(): ChartData<'radar'> {
    return {
      labels: radarchartLabels,
      datasets: [
        {data: this.datapoints, label: 'Your Answers'},
      ]
    };
  }

  /*
      TODO define proper colouring here
   */
  public recolor(): void {
    this.radarChartData.datasets[0].backgroundColor = '#507783'
    this.radarChartData.datasets[0].borderColor = 'blue'
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

    return [sc.time_flexibility, sc.fin_risk_tolerance, sc.psy_risk_tolerance, sc.cog_bias_resistance, sc.finance_knowledge]
  }


}
