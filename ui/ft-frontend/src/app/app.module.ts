import
{NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EntrypointComponent} from './entrypoint/entrypoint.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {FindashComponent} from "./findash/findash.component";
import {ChartsModule} from "ng2-charts";
import {SkillradarComponent} from './skillradar/skillradar.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {StratcompareComponent} from './stratcompare/stratcompare.component';
import {StratDetailsComponent} from './strat-details/strat-details.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {StratFeedbackComponent} from './strat-feedback/strat-feedback.component';
import {NgxStarsModule} from "ngx-stars";
import {DiscoveryComponent} from './discovery/discovery.component';
import {LandingpageComponent} from './landingpage/landingpage.component';
import { GenericRadarchartComponent } from './generic-radarchart/generic-radarchart.component';
import { ExplanationDialogComponent } from './explanation-dialog/explanation-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { NextPageDialogComponent } from './next-page-dialog/next-page-dialog.component';
import { FinishComponent } from './finish/finish.component';

const routes: Routes = [
  {path: '', component: LandingpageComponent},
  {path: 'home', component: LandingpageComponent},
  {path: 'get-started', component: EntrypointComponent},
  {path: 'dashboard', component: FindashComponent},
  {path: 'radar', component: SkillradarComponent},
  {path: 'discover', component: DiscoveryComponent},
  {path: 'finish', component: FinishComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    EntrypointComponent,
    FindashComponent,
    SkillradarComponent,
    StratcompareComponent,
    StratDetailsComponent,
    StratFeedbackComponent,
    DiscoveryComponent,
    LandingpageComponent,
    GenericRadarchartComponent,
    ExplanationDialogComponent,
    NextPageDialogComponent,
    FinishComponent,
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
    MatGridListModule,
    FlexLayoutModule,
    NgxStarsModule,
    MatDialogModule
  ],

  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
