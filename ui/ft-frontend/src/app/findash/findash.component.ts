import { Component, OnInit } from '@angular/core';

import {ChartOptions, ChartType, ChartDataset, ChartData} from 'chart.js'
import { BaseChartDirective} from "ng2-charts";
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

import {MatGridTile} from "@angular/material/grid-list";


@Component({
  selector: 'app-findash',
  templateUrl: './findash.component.html',
  styleUrls: ['./findash.component.css']
})

export class FindashComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };


  /*
    TODO hier zunächst das User Skill dashboard reinkabeln
   */
  constructor() {}

  ngOnInit(): void {
  }


}
