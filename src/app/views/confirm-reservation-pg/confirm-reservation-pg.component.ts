import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { calculator } from '@igniteui/material-icons-extended';
import { PriceCalculatorService } from '../details-pg/services/price-calculator.service';
import { Hotel } from '../home-pg/models/hotel.model';
import { ReservationDataSharingService } from '../services/reservation-data-sharing.service';
import { Router } from '@angular/router';
import { BaseProxyService } from '../../core/services/base-proxy.service';

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
        public baseproxySrv: BaseProxyService,
        public router: Router
    ) {}
    gotoTripPage(hotel: Hotel) {
        let hotels = JSON.parse(localStorage.getItem('hotels') || '[]');
        const exist = hotels.some((h: Hotel) => h.id === hotel.id);
        if (!exist) hotels.push(hotel);
        localStorage.setItem('hotels', JSON.stringify(hotels));

        this.baseproxySrv
            .create(
                hotel.id,
                'http://www.airbnb-digital-students.somee.com/add-reservation'
            )
            .subscribe((v) => console.log('add reservation', v));
        this.router.navigate(['trip']);
    }
}
