import {
    animate,
    style,
    transition,
    trigger,
    query,
    group,
} from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Input } from '@angular/core';
import { Image } from '../../../views/home-pg/models';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('slideInOut', [
            transition(':increment', [
                query(
                    ':enter, :leave',
                    style({ position: 'absolute', width: '100%' }),
                    { optional: true }
                ),
                group([
                    query(
                        ':leave',
                        [
                            animate(
                                '500ms ease-out',
                                style({ transform: 'translateX(-100%)' })
                            ),
                        ],
                        { optional: true }
                    ),
                    query(
                        ':enter',
                        [
                            style({ transform: 'translateX(100%)' }),
                            animate(
                                '500ms ease-out',
                                style({ transform: 'translateX(0)' })
                            ),
                        ],
                        { optional: true }
                    ),
                ]),
            ]),
            transition(':decrement', [
                query(
                    ':enter, :leave',
                    style({ position: 'absolute', width: '100%' }),
                    { optional: true }
                ),
                group([
                    query(
                        ':leave',
                        [
                            animate(
                                '500ms ease-out',
                                style({ transform: 'translateX(100%)' })
                            ),
                        ],
                        { optional: true }
                    ),
                    query(
                        ':enter',
                        [
                            style({ transform: 'translateX(-100%)' }),
                            animate(
                                '500ms ease-out',
                                style({ transform: 'translateX(0)' })
                            ),
                        ],
                        { optional: true }
                    ),
                ]),
            ]),
        ]),
    ],
})
export class CarouselComponent {
    currentSlide = 0;
    @Input() slides!: Image[];

    goToSlide(index: number) {
        this.currentSlide = index;
    }

    nextSlide() {
        const nextSlide = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextSlide);
    }

    previousSlide() {
        const previousSlide =
            (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(previousSlide);
    }
}
