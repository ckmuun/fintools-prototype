import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntrypointComponent} from "./entrypoint/entrypoint.component";
import {SurveyComponent} from "./questionnaire/survey.component";

const routes: Routes = [
  { path: '', redirectTo: 'get-started', pathMatch: 'full' },
  {path: 'get-started', component: EntrypointComponent},
  {path: 'survey', component: SurveyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
