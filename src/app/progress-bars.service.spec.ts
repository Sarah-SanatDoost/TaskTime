import { TestBed } from '@angular/core/testing';

import { ProgressBarsService } from './progress-bars.service';

describe('ProgressBarsService', () => {
  let service: ProgressBarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressBarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
