import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplicationLagComponent } from './replication-lag.component';

describe('ReplicationLagComponent', () => {
  let component: ReplicationLagComponent;
  let fixture: ComponentFixture<ReplicationLagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplicationLagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplicationLagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
