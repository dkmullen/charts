import { Component, OnInit } from '@angular/core';
import { ChartdataService } from '../chartdata.service';
import 'chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes';


@Component({
  selector: 'app-chart-template',
  templateUrl: './chart-template.component.html',
  styleUrls: ['./chart-template.component.scss']
})
export class ChartTemplateComponent implements OnInit {
  public chartLabels = [];
  public chartData = [];
  public chartLabel: string;
  public type;
  public data: any;

  constructor(public chartdata: ChartdataService) { }

  ngOnInit() {
    this.type = 'doughnut';
    this.getData();
  }

  switchType(type) {
    this.type = type;
  }

  getData(datatype?) {
    this.chartLabels = [];
    this.chartData = [];
    datatype ? this.chartLabel = datatype : this.chartLabel = 'System Memory';
    this.chartdata.getChartData().subscribe((res) => {
      let obj;
      const hardware = res['stats'].hardware;
      switch(datatype) {
        case 'nics':
          obj = hardware.nics;
          break;
        case 'cpus':
          obj = hardware.cpus;
          break;
        case 'disks':
          obj = hardware.disks.model;
          break;
        default:
          obj = hardware.memory;
      };
      this.buildChart(obj);
    });
  }

  buildChart(obj) {
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
  }

}
