import { Component, OnInit } from '@angular/core';
import { ChartdataService } from '../chartdata.service';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})

export class DoughnutChartComponent implements OnInit {
  public doughnutChartLabels = [];
  public doughnutChartData = [];
  public doughnutChartType = 'doughnut';

  constructor(private chartdata: ChartdataService) { }

  ngOnInit() {
    this.chartdata.getChartData().subscribe((res) => {
      const data = res.stats.hardware.memory;

      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          this.doughnutChartLabels.push(property);
          this.doughnutChartData.push(data[property]);
        }
      }
    });
  }

}
