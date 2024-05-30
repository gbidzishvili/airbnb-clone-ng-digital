import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { calculator } from '@igniteui/material-icons-extended';
import { PriceCalculatorService } from '../details-pg/services/price-calculator.service';
import { Hotel } from '../home-pg/models/hotel.model';
import { ReservationDataSharingService } from '../services/reservation-data-sharing.service';
import { Router } from '@angular/router';
import { BaseProxyService } from '../../core/services/base-proxy.service';
import { Reservation } from './models/reservation.model';
import { of, switchMap } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
@Component({
    selector: 'app-confirm-reservation-pg',
    templateUrl: './confirm-reservation-pg.component.html',
    styleUrl: './confirm-reservation-pg.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmReservationPgComponent implements OnInit {
    payForm!: FormGroup;
    constructor(
        public priceCalculatorService: PriceCalculatorService,
        public reservationSummarySrv: ReservationDataSharingService,
        public baseproxySrv: BaseProxyService,
        public router: Router,
        public http: HttpClient,
        public fb: FormBuilder
    ) {}
    ngOnInit(): void {
        this.payForm = new FormGroup({
            cardSelect: new FormControl('Credit or debit card'),
            cardNumber: new FormControl(''),
            expiration: new FormControl(''),
            cvv: new FormControl(''),
            zip: new FormControl(''),
        });
    }
    gotoTripPage(hotel: Hotel) {
        this.baseproxySrv
            .get(
                'http://www.airbnb-digital-students.somee.com/get-reservations'
            )
            .pipe(
                switchMap((hotels: any) => {
                    const exist = hotels.some(
                        (h: Reservation) => h.hotelId === hotel.id.toString()
                    );
                    if (!exist) {
                        return this.baseproxySrv.create(
                            {
                                hotelId: hotel.id.toString(),
                            },
                            'http://www.airbnb-digital-students.somee.com/add-reservation'
                        );
                    }
                    return of(null); // Ensure there's always an Observable being returned
                })
            )
            .subscribe((result) => this.router.navigate(['trip']));
    }
}
