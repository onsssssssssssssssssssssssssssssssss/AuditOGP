import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';

const routes: Routes = [
  { path: 'polar', component: PolarAreaChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
