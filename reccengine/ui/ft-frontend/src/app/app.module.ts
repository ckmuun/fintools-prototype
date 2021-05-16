import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EntrypointComponent} from './entrypoint/entrypoint.component';
import {QuestionnaireComponent} from './questionnaire/questionnaire.component';
import {McQuestionComponent} from './mc-question/mc-question.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path: '', component: EntrypointComponent},
  {path: 'questionnaires', component: QuestionnaireComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    EntrypointComponent,
    QuestionnaireComponent,
    McQuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot(routes),
  ],

  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
