import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PriceCalculatorService } from '../../../views/details-pg/services/price-calculator.service';
import { Hotel } from '../../../views/home-pg/models/hotel.model';

@Component({
    selector: 'app-reservation-summary',
    templateUrl: './reservation-summary.component.html',
    styleUrl: './reservation-summary.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservationSummaryComponent {
    @Input() hotel!: Hotel;
    constructor(public priceCalculatorService: PriceCalculatorService) {}
}
