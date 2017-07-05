import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {LastOutage} from './dashboard/last-outage';

@Injectable()
export class MetricApiService {
  baseUrl = 'http://localhost:8080/api';

  constructor(private http: Http) { }

  getPrimaryDashData(): void {}

  getLastOutageData(): Promise<LastOutage> {
    return this.http.get(this.baseUrl + '/last-outage-days')
      .toPromise()
      .then( response => response.json().lastOutageDays as LastOutage)
      .catch(this.handleError);
  }

  getHistoricalData(): Promise<any> {
    return this.http.get(this.baseUrl + '/details')
      .toPromise()
      .then( response => response.json().details as object )
      .catch(this.handleError);
  }

  getDashboardLagData(): Promise<any> {
    return this.http.get(this.baseUrl + '/dash-lag-data')
      .toPromise()
      .then(response => response.json().lagMetrics as object)
      .catch(this.handleError);
  }

  getReplicationLagData(): Promise<any> {
    return this.http.get(this.baseUrl + '/replication')
      .toPromise()
      .then( response => response.json().replication as object)
      .catch(this.handleError);
  }

  getLastUpdated(): Promise<any> {
    return this.http.get(this.baseUrl + '/last-run')
      .toPromise()
      .then( response => response.json().lastRun.lastRun as string)
      .catch(this.handleError);
  }

  getActiveHotIssues(all): Promise<any> {
    const url = all ? '/hot-issues' : '/active-hot-issues';
    return this.http.get(this.baseUrl + url)
      .toPromise()
      .then(response => response.json().hotIssues.hotIssues as object)
      .catch(this.handleError);
  }

  getLastThirtyDayData(): Promise<any> {
    return this.http.get(this.baseUrl + '/daily')
      .toPromise()
      .then(response => response.json().daily as object)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
