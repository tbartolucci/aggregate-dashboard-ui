import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastThirtyComponent } from './last-thirty.component';

describe('LastThirtyComponent', () => {
  let component: LastThirtyComponent;
  let fixture: ComponentFixture<LastThirtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastThirtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastThirtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
