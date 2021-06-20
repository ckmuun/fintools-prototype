import { Component, OnInit } from '@angular/core';
import {ChartConfiguration, ChartData, ChartType, RadarControllerChartOptions} from "chart.js";

@Component({
  selector: 'app-skillradar',
  templateUrl: './skillradar.component.html',
  styleUrls: ['./skillradar.component.css']
})
export class SkillradarComponent implements OnInit {




  constructor() {

  }

  ngOnInit(): void {
    this.recolor()
  }

  // Radar
  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public radarChartLabels: string[] = [ 'Time', 'Flexibility', 'Financial Experience', 'Financial Situation','Cognitive Bias\nResistance' ];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: [ 65, 59, 10, 81, 15], label: 'Series A' },
    ]
  };

  /*
      TODO define proper colouring here
   */
  public recolor(): void {
    this.radarChartData.datasets[0].backgroundColor = '#507783'
    this.radarChartData.datasets[0].borderColor = 'blue'
  }

  public radarChartType: ChartType = 'radar';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}