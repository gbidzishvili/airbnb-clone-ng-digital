import { TestBed } from '@angular/core/testing';

import { FetchHotelsService } from './fetch-hotels.service';

describe('FetchHotelsService', () => {
  let service: FetchHotelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchHotelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
