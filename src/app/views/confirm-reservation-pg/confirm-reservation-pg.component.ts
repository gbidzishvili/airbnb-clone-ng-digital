import { ChangeDetectionStrategy, Component } from '@angular/core';
import { calculator } from '@igniteui/material-icons-extended';
import { PriceCalculatorService } from '../details-pg/services/price-calculator.service';

@Component({
    selector: 'app-confirm-reservation-pg',
    templateUrl: './confirm-reservation-pg.component.html',
    styleUrl: './confirm-reservation-pg.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmReservationPgComponent {}
