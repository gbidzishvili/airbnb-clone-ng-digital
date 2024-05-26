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

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrl: './calculator.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent implements OnInit, OnDestroy {
    @Input() hotel!: Hotel;
    @Input() set nights(value: any) {
        this.priceCalculatorService.updateNights(value);
    }
    price = 366;
    total = 0;
    private subscription: Subscription = new Subscription();

    constructor(public priceCalculatorService: PriceCalculatorService) {}

    ngOnInit(): void {
        // this.subscription = this.priceCalculatorService.total$.subscribe(
        //     (total) => (this.total = total)
        // );
    }

    ngOnDestroy(): void {
        // this.subscription.unsubscribe(); // Prevent memory leaks
    }
}
