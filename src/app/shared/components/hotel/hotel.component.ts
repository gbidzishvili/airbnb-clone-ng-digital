import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { Hotel } from '../../../views/home-pg/models/hotel.model';
import {
    trigger,
    state,
    style,
    transition,
    animate,
} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
    selector: 'app-hotel',
    templateUrl: './hotel.component.html',
    styleUrl: './hotel.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('slideInOut', [
            state('start', style({ transform: 'translateX(0%)' })),
            state('left', style({ transform: 'translateX(-100%)' })),
            state('right', style({ transform: 'translateX(100%)' })),
            transition('left => right', [
                animate(
                    '0.5s ease-in-out',
                    style({ transform: 'translateX(0%)' })
                ),
            ]),
            transition('right => left', [
                animate(
                    '0.5s ease-in-out',
                    style({ transform: 'translateX(0%)' })
                ),
            ]),
        ]),
    ],
})
export class HotelComponent {
    @Input() hotelInfo!: Hotel;

    currentSlide = 0;

    constructor(private router: Router) {}
}
