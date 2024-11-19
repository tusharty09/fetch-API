import { Component, NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { InPlayComponent } from './in-play/in-play.component';
import { TodayComponent } from './today/today.component';
import { TommorrowComponent } from './tommorrow/tommorrow.component';

const routes: Routes = [
  { path:'in-play', component: InPlayComponent},
  { path:'today', component: TodayComponent},
  { path:'tommorrow', component: TommorrowComponent},
  { path:'',redirectTo:'/in-play', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

   
 }
