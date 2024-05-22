import { TestBed } from '@angular/core/testing';

import { FetchAmenitiesService } from './fetch-amenities.service';

describe('FetchAmenitiesService', () => {
  let service: FetchAmenitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchAmenitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
