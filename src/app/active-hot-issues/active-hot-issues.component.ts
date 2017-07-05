import { Component, OnInit } from '@angular/core';
import {MetricApiService} from '../metric-api.service';
import {NgForHelper} from '../ng-for-helper';

@Component({
  selector: 'app-active-hot-issues',
  templateUrl: './active-hot-issues.component.html',
  styleUrls: ['./active-hot-issues.component.css']
})
export class ActiveHotIssuesComponent implements OnInit {
  data: object;

  constructor(private metricService: MetricApiService, private forHelper: NgForHelper) { }

  ngOnInit() {
    this.metricService.getActiveHotIssues(true)
     .then(response => this.data = response);
  }
}
