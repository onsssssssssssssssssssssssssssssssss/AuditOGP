import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { ChartsModule } from 'ng2-charts';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    PolarAreaChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule , ChartsModule,
    MdbCheckboxModule 
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
