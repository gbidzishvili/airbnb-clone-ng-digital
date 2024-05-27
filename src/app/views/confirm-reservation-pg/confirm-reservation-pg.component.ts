import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { calculator } from '@igniteui/material-icons-extended';
import { PriceCalculatorService } from '../details-pg/services/price-calculator.service';
import { Hotel } from '../home-pg/models/hotel.model';
import { ReservationDataSharingService } from '../services/reservation-data-sharing.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-confirm-reservation-pg',
    templateUrl: './confirm-reservation-pg.component.html',
    styleUrl: './confirm-reservation-pg.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmReservationPgComponent {
    constructor(
        public priceCalculatorService: PriceCalculatorService,
        public reservationSummarySrv: ReservationDataSharingService,
        public router: Router
    ) {}
    gotoTripPage(hotel: Hotel) {
        let hotels = JSON.parse(localStorage.getItem('hotels') || '[]');
        const exist = hotels.some((h: Hotel) => h.id === hotel.id);
        if (!exist) hotels.push(hotel);
        localStorage.setItem('hotels', JSON.stringify(hotels));
        this.router.navigate(['trip']);
    }
}
