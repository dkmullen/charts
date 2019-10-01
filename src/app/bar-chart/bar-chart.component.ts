import { Component, OnInit } from '@angular/core';
import { ChartdataService } from '../chartdata.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  constructor(private chartdata: ChartdataService) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [];
  public barChartType = 'horizontalBar';
  public barChartLegend = false;
  public barChartData = [];

  ngOnInit() {
    this.chartdata.getChartData().subscribe((res) => {
      const obj = res['stats'].hardware.memory;

      for (const property in obj) {
        if (obj.hasOwnProperty(property)) {
          this.barChartLabels.push(property);
          this.barChartData.push(obj[property]);
        }
      }
    });
  }

}
