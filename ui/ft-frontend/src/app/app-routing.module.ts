import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntrypointComponent} from "./entrypoint/entrypoint.component";

const routes: Routes = [
  { path: '', redirectTo: 'get-started', pathMatch: 'full' },
  {path: 'get-started', component: EntrypointComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
