import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MetricApiService {
  baseUrl = 'http://localhost:8080/api';

  constructor(private http: Http) { }

  getPrimaryDashData(): void {}

  getLastOutageData(): void {}

  getDashboardLagData(): void {}

  getLastUpdated(): string {
    return 'July 3, 2017 6:34pm';
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