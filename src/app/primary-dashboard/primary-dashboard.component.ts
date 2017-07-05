import { Component, OnInit } from '@angular/core';
import {MetricApiService} from '../metric-api.service';
import { NgForHelper } from '../ng-for-helper';

@Component({
  selector: 'app-primary-dashboard',
  templateUrl: './primary-dashboard.component.html',
  styleUrls: ['./primary-dashboard.component.css']
})
export class PrimaryDashboardComponent implements OnInit {
  data: object;

  constructor(private metricService: MetricApiService, private forHelper: NgForHelper) { }

  ngOnInit() {
    this.metricService.getPrimaryDashData()
      .then(data => this.data = data);
  }

}
