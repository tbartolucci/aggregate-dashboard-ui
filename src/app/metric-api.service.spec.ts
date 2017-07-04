import { TestBed, inject } from '@angular/core/testing';

import { MetricApiService } from './metric-api.service';

describe('MetricApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MetricApiService]
    });
  });

  it('should be created', inject([MetricApiService], (service: MetricApiService) => {
    expect(service).toBeTruthy();
  }));
});
