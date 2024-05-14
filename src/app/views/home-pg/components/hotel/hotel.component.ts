import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Hotel } from '../../models/hotel.model';
import {
    trigger,
    state,
    style,
    transition,
    animate,
} from '@angular/animations';

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

    // animationState: string = 'start';

    // nextSlide() {
    //     this.animationState = 'right';
    //     this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    // }

    // previousSlide() {
    //     this.animationState = 'left';
    //     this.currentSlide =
    //         (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    // }
}
