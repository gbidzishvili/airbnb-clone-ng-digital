import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { transformMenu } from '@angular/material/menu';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('slideInOut', [
            // state('start', style({ transform: 'translateX(0%)' })),
            state('left', style({ transform: 'translateX(-100%)' })),
            state('right', style({ transform: 'translateX(100%)' })),
            transition('* => right', [
                style({ transform: 'translateX(0%)' }),
                animate(
                    '0.5s ease-in-out',
                    style({ transform: 'translateX(100%)' })
                ),
            ]),
            transition('* => left', [
                style({ transform: 'translateX(0%)' }),
                animate(
                    '0.5s ease-in-out',
                    style({ transform: 'translateX(-100%)' })
                ),
            ]),
        ]),
    ],
})
export class CarouselComponent {
    currentSlide = 0;
    animationState = 'left';
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
    getcurrentImageUrl() {
        return this.slides[this.currentSlide].image;
    }
    goToSlide(i:number){
      this.currentSlide = i
    }
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }
    previousSlide() {
        this.currentSlide =
            (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    }
}
