import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ChartsModule } from 'ng2-charts';
import { ChartjsModule } from '@ctrl/ngx-chartjs';
import 'chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartdataService } from './chartdata.service';
import { ChartTemplateComponent } from './chart-template/chart-template.component';

const routes: Routes = [
  {path: 'chart-template', component: ChartTemplateComponent},
  {path: '**', component: ChartTemplateComponent }
];

@NgModule({
  declarations: [
    AppComponent,
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
