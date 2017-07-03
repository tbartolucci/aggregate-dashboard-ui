import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotIssuesComponent } from './hot-issues.component';

describe('HotIssuesComponent', () => {
  let component: HotIssuesComponent;
  let fixture: ComponentFixture<HotIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotIssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
