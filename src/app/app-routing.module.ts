import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoricalComponent } from './historical/historical.component';
import { HotIssuesComponent } from './hot-issues/hot-issues.component';
import { LastThirtyComponent } from './last-thirty/last-thirty.component';
import { ReplicationLagComponent } from './replication-lag/replication-lag.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'historical', component: HistoricalComponent },
  { path: 'daily',     component: LastThirtyComponent },
  { path: 'hot-issues', component: HotIssuesComponent },
  { path: 'replication-lag', component: ReplicationLagComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
