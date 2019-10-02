import { Component, OnInit } from '@angular/core';
import { ChartdataService } from '../chartdata.service';
import { Classic20, HueCircle19, Tableau20 } from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau';
import 'chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes';


@Component({
  selector: 'app-chart-template',
  templateUrl: './chart-template.component.html',
  styleUrls: ['./chart-template.component.scss']
})
export class ChartTemplateComponent implements OnInit {
  public chartLabels = [];
  public chartData = [];
  public chartLabel = 'System Memory';
  type;

  data: any;

  constructor(public chartdata: ChartdataService) { }

  ngOnInit() {
    this.type = 'doughnut';
    this.buildChart();
  }

  switchType(type) {
    this.type = type;
    // this.buildChart();
  }

  buildChart() {
    this.chartdata.getChartData().subscribe((res) => {
      const obj = res['stats'].hardware.memory;
      for (const property in obj) {
        if (obj.hasOwnProperty(property)) {
          this.chartLabels.push(property);
          this.chartData.push(obj[property]);
        }
      }
      this.data = this.chartdata.getChart();
      this.data.labels = this.chartLabels;
      this.data.datasets[0].data = this.chartData;
      this.data.datasets[0].label = this.chartLabel;
    });
  }
  

}
