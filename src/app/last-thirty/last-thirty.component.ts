import { Component, OnInit } from '@angular/core';

import { MetricApiService } from '../metric-api.service';

@Component({
  selector: 'app-last-thirty',
  templateUrl: './last-thirty.component.html',
  styleUrls: ['./last-thirty.component.css']
})
export class LastThirtyComponent implements OnInit {
  data: object;

  constructor(private metricService: MetricApiService) { }

  ngOnInit() {
    this.metricService.getLastThirtyDayData()
       .then(response => this.data = response);
  }

  getKeys(obj): string[] {
    return Object.keys(obj);
  }
}
