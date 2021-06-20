import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {McQuestionnaire} from "./questionnaire.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StrategyService {

  constructor(private httpClient: HttpClient) {

  }


  postFilledQuestionnaires(questionnaires: McQuestionnaire[]): Observable<FinanceStrategy[]> {
    return this.httpClient.post<FinanceStrategy[]>("http://localhost:8080/api/questionnaires/", questionnaires)
  }


}

export class FintoolRecomDto {

  constructor(strategies: FinanceStrategy[]) {

    this.strategies = strategies;
  }

  strategies: FinanceStrategy[]
}

export class FinanceStrategy {

}
