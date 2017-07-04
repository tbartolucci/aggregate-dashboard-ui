import { Component, OnInit } from '@angular/core';
import {MetricApiService} from '../metric-api.service';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent implements OnInit {
  data: object;

  constructor(private metricService: MetricApiService) { }

  ngOnInit() {
    this.metricService.getHistoricalData()
      .then( response => this.data = response.json().details as object );
  }

  getKeys(obj): string[] {
    return Object.keys(obj);
  }
}
