import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('slideInLeft', [
            transition(':enter', [
                animate(
                    '500ms ease-out',
                    style({ transform: 'translateX(-300px)' })
                ),
            ]),
            transition(':leave', [
                animate(
                    '500ms ease-out',
                    style({ transform: 'translateX(-300px)' })
                ),
            ]),
        ]),
        trigger('slideInRight', [
            transition(':enter', [
                animate(
                    '500ms ease-out',
                    style({ transform: 'translateX(300px)' })
                ),
            ]),
            transition(':leave', [
                animate(
                    '500ms ease-out',
                    style({ transform: 'translateX(300px)' })
                ),
            ]),
        ]),
    ],
})
export class CarouselComponent {
    currentSlide = 0;
    direction = 'left';
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
    imageVisible(i: number) {
        return i === this.currentSlide;
    }
    goToSlide(index: number) {
        // const difference = index - this.currentSlide;
        // this.difference += difference * -300;
        // console.log(this.difference);
        // this.translateX = `translateX(${this.difference}px)`;
        // this.direction = difference > 0 ? 'left' : 'right';
        this.currentSlide = index;
    }

    nextSlide() {
        this.direction = 'right';
        const nextSlide = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextSlide);
    }

    previousSlide() {
        this.direction = 'left';
        const previousSlide =
            (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(previousSlide);
    }
}
