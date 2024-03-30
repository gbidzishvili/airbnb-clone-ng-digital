import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-details-pg',
    templateUrl: './details-pg.component.html',
    styleUrl: './details-pg.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsPgComponent {
    slides = [
        {
            src: 'https://a0.muscache.com/im/pictures/miso/Hosting-49645126/original/835c2f2a-fc7f-4a57-a6f3-24a70161f0d8.jpeg?im_w=1200',

            alt: 'hotel-image',
        },
        {
            src: 'https://a0.muscache.com/im/pictures/miso/Hosting-49645126/original/25560347-6fd0-492c-aea3-9d32e318ad02.jpeg?im_w=720',

            alt: 'hotel-image',
        },
        {
            src: 'https://a0.muscache.com/im/pictures/miso/Hosting-49645126/original/40d52005-b28d-4b50-87a9-fd30c15cd63b.jpeg?im_w=720',
            alt: 'hotel-image',
        },
    ];
}
