import { Component, OnInit } from '@angular/core';
import { ChartdataService } from '../chartdata.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  public chartLabels = [];
  public chartData = [];
  public chartType = 'line';

  constructor(private chartdata: ChartdataService) { }

  ngOnInit() {
    this.chartdata.getChartData().subscribe((res) => {
      const obj = res['stats'].hardware.memory;

      for (const property in obj) {
        if (obj.hasOwnProperty(property)) {
          this.chartLabels.push(property);
          this.chartData.push(obj[property]);
        }
      }
    });
  }

}
