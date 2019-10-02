import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ChartsModule } from 'ng2-charts';
import { ChartjsModule } from '@ctrl/ngx-chartjs';
import { Classic20, HueCircle19, Tableau20 } from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau';
import 'chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { ChartdataService } from './chartdata.service';
import { ChartTemplateComponent } from './chart-template/chart-template.component';

const routes: Routes = [
  {path: 'bar-chart', component: BarChartComponent},
  {path: 'doughnut-chart', component: DoughnutChartComponent},
  {path: 'radar-chart', component: RadarChartComponent},
  {path: 'line-chart', component: LineChartComponent},
  {path: 'chart-template', component: ChartTemplateComponent},
  {path: '**', component: BarChartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    BarChartComponent,
    LineChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    ChartTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ChartsModule,
    ChartjsModule,
    HttpClientModule,
  ],
  providers: [ChartdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
