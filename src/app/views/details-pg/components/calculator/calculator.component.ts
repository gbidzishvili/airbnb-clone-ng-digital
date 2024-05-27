import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    Input,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { PriceCalculatorService } from '../../services/price-calculator.service';
import { Hotel } from '../../../home-pg/models/hotel.model';
import { Router } from '@angular/router';
import { ReservationDataSharingService } from '../../../services/reservation-data-sharing.service';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrl: './calculator.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent {
    @Input() hotel!: Hotel;
    @Input() set nights(value: any) {
        this.priceCalculatorService.updateNights(
            value,
            this.hotel.rooms[0].pricePerNight
        );
    }

    constructor(
        public priceCalculatorService: PriceCalculatorService,
        private router: Router,
        private reservationData: ReservationDataSharingService
    ) {}

    gotoConfirmReservation() {
        // console.log(this.hotel);
        // console.log(this.priceCalculatorService.nights$);
        // console.log(this.priceCalculatorService.startDate$);
        // console.log(this.priceCalculatorService.endDate$);
        this.router.navigate(['reservation']);
        this.reservationData.updateReservationData(this.hotel);
    }
}
