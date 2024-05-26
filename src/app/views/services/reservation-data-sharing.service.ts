import { Injectable } from '@angular/core';
import { Hotel } from '../home-pg/models/hotel.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ReservationDataSharingService {
    hotel = new Subject<Hotel>();
    constructor() {}
    updateReservationData(hotelData: Hotel) {
        this.hotel.next(hotelData);
    }
}
