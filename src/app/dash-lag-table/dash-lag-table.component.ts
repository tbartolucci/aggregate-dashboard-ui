import { Component, OnInit } from '@angular/core';
import {MetricApiService} from '../metric-api.service';
import {NgForHelper} from '../ng-for-helper';

@Component({
  selector: 'app-dash-lag-table',
  templateUrl: './dash-lag-table.component.html',
  styleUrls: ['./dash-lag-table.component.css']
})
export class DashLagTableComponent implements OnInit {

  data: object;

  constructor(private metricService: MetricApiService, private forHelper: NgForHelper) { }

  ngOnInit() {
    this.metricService.getDashboardLagData()
      .then(response => this.data = response);
  }

}
