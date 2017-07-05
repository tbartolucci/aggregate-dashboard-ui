import { Component, OnInit } from '@angular/core';
import {MetricApiService} from '../metric-api.service';

@Component({
  selector: 'app-active-hot-issues',
  templateUrl: './active-hot-issues.component.html',
  styleUrls: ['./active-hot-issues.component.css']
})
export class ActiveHotIssuesComponent implements OnInit {
  data: object;

  constructor(private metricService: MetricApiService) { }

  ngOnInit() {
    this.metricService.getActiveHotIssues(true)
     .then(response => this.data = response);
  }

  getKeys(obj): string[] {
    return Object.keys(obj);
  }
}
