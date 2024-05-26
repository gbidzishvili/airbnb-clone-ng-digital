import { TestBed } from '@angular/core/testing';

import { ReservationDataSharingService } from './reservation-data-sharing.service';

describe('ReservationDataSharingService', () => {
  let service: ReservationDataSharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationDataSharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
