import { Component, OnInit } from '@angular/core';
import {MetricApiService} from '../metric-api.service';
import {NgForHelper} from '../ng-for-helper';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent implements OnInit {
  data: object;

  constructor(private metricService: MetricApiService, private forHelper: NgForHelper) { }

  ngOnInit() {
    this.metricService.getHistoricalData()
      .then( data => this.data = data );
  }

}
