import {Component, OnInit} from '@angular/core';
import {ChartConfiguration, ChartData, ChartType, RadarControllerChartOptions} from "chart.js";
import {radarchartLabels} from "../ftconstants";

@Component({
  selector: 'app-skillradar',
  templateUrl: './skillradar.component.html',
  styleUrls: ['./skillradar.component.css']
})
export class SkillradarComponent implements OnInit {

  datapoints: number[]
  radarChartData: ChartData<'radar'>


  constructor(datapts: number[]) {
    this.datapoints = datapts;

    this.radarChartData = this.initRadarChartData();
  }

  ngOnInit(): void {
    this.recolor()
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
}
