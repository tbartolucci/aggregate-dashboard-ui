import { Component, OnInit } from '@angular/core';
import {MetricApiService} from '../metric-api.service';

@Component({
  selector: 'app-dash-lag-table',
  templateUrl: './dash-lag-table.component.html',
  styleUrls: ['./dash-lag-table.component.css']
})
export class DashLagTableComponent implements OnInit {

  data: object;

  constructor(private metricService: MetricApiService) { }

  ngOnInit() {
    this.metricService.getDashboardLagData()
      .then(response => this.data = response);
  }

  getKeys(obj): string[] {
    return Object.keys(obj);
  }

}
