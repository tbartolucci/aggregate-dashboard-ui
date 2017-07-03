import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashLagTableComponent } from './dash-lag-table.component';

describe('DashLagTableComponent', () => {
  let component: DashLagTableComponent;
  let fixture: ComponentFixture<DashLagTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashLagTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashLagTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
