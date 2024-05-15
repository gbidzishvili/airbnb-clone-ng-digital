import {
    animate,
    style,
    transition,
    trigger,
    query,
    group,
} from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';

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
    slides = [
        {
            image: 'https://media.istockphoto.com/id/1160446488/photo/tbilisi-downtown-georgia-taken-in-april-2019.jpg?s=612x612&w=0&k=20&c=yybfqVCUZsy8qNWMnpmX1AjAmbuXtj5Kg5aekaeHj7M=',
            caption: 'Slide 1',
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQamqpHyUPsm0VINKISOMADb-AE2RMYCA3JBWCFfequ4w&s',
            caption: 'Slide 2',
        },
        {
            image: 'https://tse1.mm.bing.net/th?id=OIP.G37tgeQqSNt7v2oPfj9ltQHaE7&pid=Api',
            caption: 'Slide 3',
        },
    ];

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
