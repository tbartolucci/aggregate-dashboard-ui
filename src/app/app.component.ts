import { Component, OnInit } from '@angular/core';
import {MetricApiService} from './metric-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Billtrust Technology Dashboard';
  lastUpdated: string;

  constructor(private metricService: MetricApiService) {}

  ngOnInit(): void {
    this.lastUpdated = this.metricService.getLastUpdated();
  }
}
