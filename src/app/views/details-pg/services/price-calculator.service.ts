import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PriceCalculatorService {
    private totalSource = new BehaviorSubject<number>(5);
    total$ = this.totalSource.asObservable();
    nights$ = new BehaviorSubject<number>(5);
    startDate$ = new BehaviorSubject<Date>(new Date());
    endDate$ = new BehaviorSubject<Date>(
        new Date(new Date().setDate(new Date().getDate() + 5))
    );
    private pricePerNight = 366; // Example price per night

    updateNights(value: any): void {
        const total = value.nights * this.pricePerNight;
        this.totalSource.next(total);
        this.nights$.next(value.nights);
        this.startDate$.next(value.startDate);
        this.endDate$.next(value.endDate);
    }
}
