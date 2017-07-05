import { Component, OnInit } from '@angular/core';

import { MetricApiService } from '../metric-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lastOutage: any;

  constructor(private metricService: MetricApiService) { }

  ngOnInit() {
    this.metricService.getLastOutageData()
      .then( lastOutage => this.lastOutage = lastOutage);
  }

  getStyle(): string {
    if (typeof(this.lastOutage.lastOutage) !== 'undefined') {
      if (parseInt(this.lastOutage.lastOutage, 10) < 3) {
        return 'notgood';
      } else if (parseInt(this.lastOutage.lastOutage, 10) < 7) {
        return 'better';
      } else {
        return 'best';
      }
    }
    return '';
  }
}
