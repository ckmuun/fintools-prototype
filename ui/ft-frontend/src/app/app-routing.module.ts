import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntrypointComponent} from "./entrypoint/entrypoint.component";
import {LandingpageComponent} from "./landingpage/landingpage.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'get-started', component: EntrypointComponent},
  {path: 'home', component: LandingpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
