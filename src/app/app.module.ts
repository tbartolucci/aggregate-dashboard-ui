import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrimaryDashboardComponent } from './primary-dashboard/primary-dashboard.component';
import { LastThirtyComponent } from './last-thirty/last-thirty.component';
import { HistoricalComponent } from './historical/historical.component';
import { HotIssuesComponent } from './hot-issues/hot-issues.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActiveHotIssuesComponent } from './active-hot-issues/active-hot-issues.component';
import { DashLagTableComponent } from './dash-lag-table/dash-lag-table.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryDashboardComponent,
    LastThirtyComponent,
    HistoricalComponent,
    HotIssuesComponent,
    DashboardComponent,
    ActiveHotIssuesComponent,
    DashLagTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
