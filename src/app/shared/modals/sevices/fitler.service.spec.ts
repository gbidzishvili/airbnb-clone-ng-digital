import { TestBed } from '@angular/core/testing';

import { FitlerService } from './fitler.service';

describe('FitlerService', () => {
  let service: FitlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FitlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
