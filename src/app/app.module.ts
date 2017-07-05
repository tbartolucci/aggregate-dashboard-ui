import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PrimaryDashboardComponent } from './primary-dashboard/primary-dashboard.component';
import { LastThirtyComponent } from './last-thirty/last-thirty.component';
import { HistoricalComponent } from './historical/historical.component';
import { HotIssuesComponent } from './hot-issues/hot-issues.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActiveHotIssuesComponent } from './active-hot-issues/active-hot-issues.component';
import { DashLagTableComponent } from './dash-lag-table/dash-lag-table.component';
import { ReplicationLagComponent } from './replication-lag/replication-lag.component';

import { AppRoutingModule } from './app-routing.module';

import { MetricApiService } from './metric-api.service';
import { NgForHelper } from './ng-for-helper';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryDashboardComponent,
    LastThirtyComponent,
    HistoricalComponent,
    HotIssuesComponent,
    DashboardComponent,
    ActiveHotIssuesComponent,
    DashLagTableComponent,
    ReplicationLagComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    MetricApiService,
    NgForHelper  // Legacy construct due to porting old API
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
