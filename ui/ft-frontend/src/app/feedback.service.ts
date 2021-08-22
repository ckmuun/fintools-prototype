import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) {


  }

  public persistFeedback(feedback: StrategyFeedbackDto[]): Observable<any> {

    console.log("sending feedback to backend")

    console.log(JSON.stringify(feedback))
    return this.http.post<string>("http://localhost:8080/api/feedback", feedback)
  }
}

export class StrategyFeedbackDto {

  /* GO STRUCT
    type StrategyFeedback struct {
	Rating       int       `json:"rating"`
	StrategyName string    `json:"strategy_name"`
	UserId       uuid.UUID `json:"user_id"`
}
   */

  rating: number
  strategy_name: string
  user_id: string

  constructor(rating: number, strategy_name: string, user_id: string) {
    this.rating = rating;
    this.strategy_name = strategy_name;
    this.user_id = user_id;
  }
}
