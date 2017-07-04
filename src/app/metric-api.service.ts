import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MetricApiService {
  baseUrl = 'http://localhost:8080/api';

  constructor(private http: Http) { }

  getPrimaryDashData(): void {}

  getLastOutageData(): Promise<any> {
    return this.http.get(this.baseUrl + '/last-run')
      .toPromise()
      .catch(this.handleError);
  }

  getHistoricalData(): Promise<any> {
    return this.http.get(this.baseUrl + '/details')
      .toPromise()
      .catch(this.handleError);
  }

  getDashboardLagData(): Promise<any> {
    return this.http.get(this.baseUrl + '/dash-lag-data')
      .toPromise()
      .catch(this.handleError);
  }

  getLastUpdated(): Promise<any> {
    return this.http.get(this.baseUrl + '/last-run')
      .toPromise()
      .catch(this.handleError);
  }

  getActiveHotIssues(): Promise<any> {
    return this.http.get(this.baseUrl + '/hot-issues')
      .toPromise()
      .catch(this.handleError);
  }

  getLastThirtyDayData(): Promise<any> {
    return this.http.get(this.baseUrl + '/daily')
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
