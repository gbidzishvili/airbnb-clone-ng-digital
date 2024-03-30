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

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrl: './calculator.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent implements OnInit, OnDestroy {
    @Input() set nights(value: number) {
        this.priceCalculatorService.updateNights(value);
    }
    price = 366;
    total = 0;
    private subscription: Subscription = new Subscription();

    constructor(private priceCalculatorService: PriceCalculatorService) {}

    ngOnInit(): void {
        this.subscription = this.priceCalculatorService.total$.subscribe({
            next: (total) => {
                this.total = total;
            },
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe(); // Prevent memory leaks
    }
}
