import { animate, style, transition, trigger } from '@angular/animations';
import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('carouselAnimation', [
            transition('void => *', [
                style({ opacity: 0 }),
                animate('300ms', style({ opacity: 1 })),
            ]),
            transition('* => void', [animate('300ms', style({ opacity: 0 }))]),
        ]),
    ],
})
export class CarouselComponent implements OnInit {
    @Input() slides!: { src: string; alt: string }[];
    currentSlide = 0;
    ngOnInit(): void {
        this.preloadImages();
    }
    preloadImages() {
        for (let { src } of this.slides) {
            new Image().src = src;
        }
    }
    onPrevClick() {
        const prev = this.currentSlide - 1;
        this.currentSlide = prev === -1 ? this.slides.length - 1 : prev;
    }
    onNextClick() {
        const next = this.currentSlide + 1;
        this.currentSlide = next === this.slides.length ? 0 : next;
    }
}
