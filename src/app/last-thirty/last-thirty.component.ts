import { Component, OnInit } from '@angular/core';

import { MetricApiService } from '../metric-api.service';
import {NgForHelper} from '../ng-for-helper';

@Component({
  selector: 'app-last-thirty',
  templateUrl: './last-thirty.component.html',
  styleUrls: ['./last-thirty.component.css']
})
export class LastThirtyComponent implements OnInit {
  data: object;

  constructor(private metricService: MetricApiService, private forHelper: NgForHelper) { }

  ngOnInit() {
    this.metricService.getLastThirtyDayData()
       .then(response => this.data = response);
  }
}
