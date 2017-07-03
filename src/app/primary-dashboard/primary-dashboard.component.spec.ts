import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryDashboardComponent } from './primary-dashboard.component';

describe('PrimaryDashboardComponent', () => {
  let component: PrimaryDashboardComponent;
  let fixture: ComponentFixture<PrimaryDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
