import { Component, OnInit } from '@angular/core';
import {MetricApiService} from '../metric-api.service';

@Component({
  selector: 'app-replication-lag',
  templateUrl: './replication-lag.component.html',
  styleUrls: ['./replication-lag.component.css']
})
export class ReplicationLagComponent implements OnInit {
  data: object;

  constructor(private metricService: MetricApiService) { }

  ngOnInit() {
    this.metricService.getDashboardLagData()
       .then(response => this.data = response.json().lagMetrics as object);
  }

  getKeys(obj): string[] {
    return Object.keys(obj);
  }

}
