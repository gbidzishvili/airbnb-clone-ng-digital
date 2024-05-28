import { Injectable } from '@angular/core';
import { Hotel } from '../home-pg/models/hotel.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ReservationDataSharingService {
    startDate$ = new BehaviorSubject<Date>(new Date());
    endDate$ = new BehaviorSubject<Date>(new Date());
    hotel$ = new BehaviorSubject<Hotel | null>(null);
    constructor() {}
    updateReservationData(hotelData: Hotel) {
        this.hotel$.next(hotelData);
        this.hotel$.subscribe((v) => console.log(v));
    }
    getDates(startDate: any, endDate: any) {
        this.startDate$.next(startDate);
        this.endDate$.next(endDate);
    }
}
