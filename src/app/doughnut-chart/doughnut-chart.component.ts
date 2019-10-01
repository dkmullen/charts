import { Component, OnInit } from '@angular/core';
import { ChartdataService } from '../chartdata.service';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})

export class DoughnutChartComponent implements OnInit {
  public chartLabels = [];
  public chartData = [];
  public chartType = 'doughnut';
  public chartColors = ['red', 'blue', 'green'
    // {backgroundColor: 'rgba(255, 99, 132, 0.2)', borderColor: 'rgba(255, 99, 132, 1)'},
    // {backgroundColor: 'rgba(54, 162, 235, 0.2)', borderColor: 'rgba(54, 162, 235, 1)'}
    // 'rgba(54, 162, 235, 0.2)',
    // 'rgba(255, 206, 86, 0.2)',
    // 'rgba(75, 192, 192, 0.2)',
    // 'rgba(153, 102, 255, 0.2)',
    // 'rgba(255, 159, 64, 0.2)',
    // 'rgba(115, 146, 44, 0.2)',
    // 'rgba(15, 46, 4, 0.2)'
  ];

  chartOptions = {
    responsive: true
  };

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
