import {Component, Inject, OnInit} from '@angular/core';
import {FintoolRecomDto, ScoreContainer, StrategyComponent, StrategyService} from "../strategy.service";

@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.css']
})
export class DiscoveryComponent implements OnInit {

  constructor(private strategySvc: StrategyService) { }

  // dirty initializer hack
  data: FintoolRecomDto = {} as any

  userScoreArr: number[] = []
  badRecomStrats: StrategyComponent[] = [];
  badStratArrs: number[][] = [];

  randomSample: StrategyComponent[] = [];

  ngOnInit(): void {
    this.strategySvc.data$.subscribe(
      resp => {
        this.data = resp;
        this.userScoreArr = this.getNumberArray(resp.user_scores)
        this.badRecomStrats = this.data.good_recommendation.recommended_components
        this.extractStrategyScores(this.badRecomStrats)
      }
    )

    this.strategySvc.stratSampleData$.subscribe(
      resp => {
        this.randomSample = resp;
        // todo extract data here more fine-grained.
      }
    )
  }

  extractStrategyScores(scs: StrategyComponent[]) {
    scs.forEach(
      strategy => {
        this.badStratArrs.push([strategy.time_flexibility, strategy.fin_risk_tolerance, strategy.psy_risk_tolerance, strategy.cog_bias_resistance, strategy.financial_knowledge])
      }
    )
  }

  /*
    Based on: export const radarchartLabels: string[] = ['TimeFlexibility', 'Financial Risk Tolerance', 'Psychological Risk Tolerance', 'Cognitive Bias Resistance', 'Finance Knowledge'];
   */
  getNumberArray(sc: ScoreContainer): number[] {
    return [sc.time_flexibility, sc.fin_risk_tolerance, sc.psy_risk_tolerance, sc.cog_bias_resistance, sc.financial_knowledge]
  }
}
