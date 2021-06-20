import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EntrypointComponent} from './entrypoint/entrypoint.component';
import {SurveyComponent} from './questionnaire/survey.component';
import {McQuestionComponent} from './mc-question/mc-question.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {MatCard, MatCardModule} from "@angular/material/card";
import {FindashComponent} from "./findash/findash.component";
import {ChartsModule} from "ng2-charts";
import { BaseChartDirective } from "ng2-charts";
import { SkillradarComponent } from './skillradar/skillradar.component';

const routes: Routes = [
  {path: 'get-started', component: EntrypointComponent},
  {path: 'dashboard', component: FindashComponent},
  {path: 'radar', component: SkillradarComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    EntrypointComponent,
    SurveyComponent,
    McQuestionComponent,
    FindashComponent,
    SkillradarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    ChartsModule,
  ],

  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
