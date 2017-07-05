import { Component, OnInit } from '@angular/core';
import {MetricApiService} from '../metric-api.service';
import {NgForHelper} from '../ng-for-helper';

@Component({
  selector: 'app-replication-lag',
  templateUrl: './replication-lag.component.html',
  styleUrls: ['./replication-lag.component.css']
})
export class ReplicationLagComponent implements OnInit {
  data: object;

  constructor(private metricService: MetricApiService, private forHelper: NgForHelper) { }

  ngOnInit() {
    this.metricService.getReplicationLagData()
       .then(response => this.data = response);
  }

}
