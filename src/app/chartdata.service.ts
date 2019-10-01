import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartdataService {

  constructor(private http: HttpClient) { }

  getChartData() {
    return this.http.get('/assets/latest.json');
  }
}
