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

  strats: StrategyComponent[] = [];
  stratArrs: number[][] = [];

  userScoreArr: number[] = []

  ngOnInit(): void {


    this.strategySvc.data$.subscribe(
      resp => {
        this.userScoreArr = this.getNumberArray(resp.user_scores)

        console.log("DEBUG OUTPUT")
        this.strats.forEach(
          strat => {
            console.log("strategy: " + strat.name)
            console.log("has scores: " + this.getNumberArrayFromStrategy(strat));
          });
      }
    )

    this.strategySvc.getRandomStrategySample().subscribe(
      resp => {
        this.strats = resp;
        this.extractStrategyScores(this.strats)
      }
    )
  }


  extractStrategyScores(scs: StrategyComponent[]) {
    scs.forEach(
      strategy => {
        this.stratArrs.push([strategy.time_flexibility, strategy.fin_risk_tolerance, strategy.psy_risk_tolerance, strategy.cog_bias_resistance, strategy.financial_knowledge])
      }
    )
  }

  /*
    Based on: export const radarchartLabels: string[] = ['TimeFlexibility', 'Financial Risk Tolerance', 'Psychological Risk Tolerance', 'Cognitive Bias Resistance', 'Finance Knowledge'];
   */
  getNumberArray(sc: ScoreContainer): number[] {
    return [sc.time_flexibility, sc.fin_risk_tolerance, sc.psy_risk_tolerance, sc.cog_bias_resistance, sc.financial_knowledge]
  }
  getNumberArrayFromStrategy(strat: StrategyComponent): number[] {

    return [strat.time_flexibility, strat.fin_risk_tolerance, strat.psy_risk_tolerance, strat.cog_bias_resistance, strat.financial_knowledge]
  }
}
