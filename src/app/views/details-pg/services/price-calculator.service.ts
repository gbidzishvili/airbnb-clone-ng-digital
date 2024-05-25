import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PriceCalculatorService {
    private totalSource = new BehaviorSubject<number>(5);
    total$ = this.totalSource.asObservable();

    private pricePerNight = 366; // Example price per night

    updateNights(nights: number): void {
        const total = nights * this.pricePerNight;
        this.totalSource.next(total);
    }
}
