import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveHotIssuesComponent } from './active-hot-issues.component';

describe('ActiveHotIssuesComponent', () => {
  let component: ActiveHotIssuesComponent;
  let fixture: ComponentFixture<ActiveHotIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveHotIssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveHotIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
