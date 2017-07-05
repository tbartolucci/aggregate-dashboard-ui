import { Component, OnInit } from '@angular/core';

import {LastOutage} from '../dashboard/last-outage';
import {MetricApiService} from '../metric-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lastOutage: LastOutage;

  constructor(private metricService: MetricApiService) { }

  ngOnInit() {
    this.metricService.getLastOutageData()
      .then( lastOutage => this.lastOutage = lastOutage);
  }

}
