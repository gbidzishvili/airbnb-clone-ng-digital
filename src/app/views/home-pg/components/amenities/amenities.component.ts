import { trigger, transition, style, animate } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { amenity } from '../../models';
import { BaseProxyService } from '../../../../core/services/base-proxy.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-amenities',
    templateUrl: './amenities.component.html',
    styleUrls: ['./amenities.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('slideInOut', [
            transition(':increment', [
                style({ transform: 'translateX(0%)' }),
                animate(
                    '200ms ease-out',
                    style({ transform: 'translateX(-80px)' })
                ),
            ]),
            transition(':decrement', [
                style({ transform: 'translateX(0%)' }),
                animate(
                    '200ms ease-out',
                    style({ transform: 'translateX(80px)' })
                ),
            ]),
        ]),
    ],
})
export class AmenitiesComponent implements OnInit {
    currentSlide = 0;
    maxVisibleItems = 10;
    itemWidth = 80; // in pixels
    selectedAmenities: any = [];
    amenities$!: Observable<amenity[]>;
    constructor(private baseProxySrv: BaseProxyService) {}
    ngOnInit(): void {
        this.amenities$ = this.baseProxySrv.get<amenity[]>(
            'http://www.airbnb-digital-students.somee.com/getall'
        );
    }
    previousSlide() {
        // if (this.currentSlide > 0) {
            this.currentSlide -= 1;
        // }
    }

    nextSlide() {
        // if (this.currentSlide + this.maxVisibleItems < this.amenities$.length) {
            this.currentSlide += 1;
        // }
    }

    getContainerStyle() {
        return {
            transform: `translateX(-${this.currentSlide * this.itemWidth}px)`,
            transition: 'transform 0.5s ease-out',
        };
    }
    filterByAmenity(amenity: amenity, i: number) {
        this.selectedAmenities[i] = amenity;
        console.log(this.selectedAmenities);
    }
    // amenities: amenity[] = [
    //     {
    //         id: '87adc381-b229-aafe-5872-8edb8ed2a0c9',
    //         name: 'Lake view',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M28 2a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2H4v15.5h.19c.37-.04.72-.17 1-.38l.14-.11A3.98 3.98 0 0 1 8 18c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 18c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 18c.99 0 1.94.35 2.67 1 .35.33.83.5 1.33.5v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1v3h.19c.37-.04.72-.17 1-.38l.14-.11A3.98 3.98 0 0 1 8 23c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 23c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 23c.99 0 1.94.35 2.67 1 .35.33.83.5 1.33.5v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1V28h24zm-6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>',
    //         type: 'Scenic views',
    //     },
    //     {
    //         id: '091bc5bf-06d6-4b02-f3a6-fbf82168d5a8',
    //         name: 'Mountain view',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M28 2a2 2 0 0 1 2 1.85V28a2 2 0 0 1-1.85 2H4a2 2 0 0 1-2-1.85V4a2 2 0 0 1 1.85-2H4zm-5.92 20H9.92L4 27.91V28h24v-.09zM28 4H4v21.08l12-12 12 12zM16 15.91 11.91 20h8.17zM22 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>',
    //         type: 'Scenic views',
    //     },
    //     {
    //         id: '5e31bf19-ae8c-87a3-405f-096156602d71',
    //         name: 'Hair dryer',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M14 27v.2a4 4 0 0 1-3.8 3.8H4v-2h6.15a2 2 0 0 0 1.84-1.84L12 27zM10 1c.54 0 1.07.05 1.58.14l.38.07 17.45 3.65a2 2 0 0 1 1.58 1.79l.01.16v6.38a2 2 0 0 1-1.43 1.91l-.16.04-13.55 2.83 1.76 6.5A2 2 0 0 1 15.87 27l-.18.01h-3.93a2 2 0 0 1-1.88-1.32l-.05-.15-1.88-6.76A9 9 0 0 1 10 1zm5.7 24-1.8-6.62-1.81.38a9 9 0 0 1-1.67.23h-.33L11.76 25zM10 3a7 7 0 1 0 1.32 13.88l.33-.07L29 13.18V6.8L11.54 3.17A7.03 7.03 0 0 0 10 3zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path></svg>',
    //         type: 'Bathroom',
    //     },
    //     {
    //         id: 'abd0b17b-c463-4073-7dc7-ea2439856300',
    //         name: 'Hot water',
    //         image: '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="m4 2v2h2l.001 2h-1.001c-1.1045695 0-2 .8954305-2 2v16.3846154c0 3.0720253 2.20424471 5.6153846 5 5.6153846h16c2.7957553 0 5-2.5433593 5-5.6153846v-9.3846154h-2l.0006267 2.2441864c-.2957862.1662973-.6415947.2556548-1.0003023.2558136-.3770726-.0001668-.7397707-.0987428-1.0448826-.2813581l-.147435-.0980881-.0698054-.0542225-.0669618-.0575717c-.1674894-.1516722-.3473184-.2870627-.5370123-.4056091-.1267551-.0791722-.2576057-.1507019-.3921007-.2145789l-.2041007-.0899647c-.4828805-.1966888-1.005996-.2986069-1.537908-.2986069-.1521835 0-.3034078.0083174-.453179.0247859l-.2234033.0307902c-.658505.1092272-1.2810008.3778141-1.8035225.7911936l-.1911344.1617761c-.3493432.3161496-.8261929.4912319-1.3293208.4914542-.5021258-.0002223-.9789755-.1753046-1.3283187-.4914542-.7261733-.6571745-1.6832835-1.0085458-2.6712392-1.0085458-.9878365 0-1.9453342.3515135-2.6706493 1.008332-.3497754.3163381-.8267557.4914457-1.3290263.491668-.502832-.0002223-.97980321-.1753492-1.32908476-.4912404-.72578749-.6572461-1.68328523-1.0087596-2.67112174-1.0087596-.34005846 0-.67646247.0416292-1.00105227.1230294l.00093437-8.1230294h4v2h2v-2c0-1.1045695-.8954305-2-2-2h-.999l-.001-2.001 2 .001v-2zm22.0003242 17.4999999c.3396204-.0001501.6755904-.0417799.9997827-.1230407v5.0076562c0 2.0259877-1.3775842 3.6153845-3.0001069 3.6153845h-16c-1.62252271 0-3-1.5893968-3-3.6153845l-.00148637-6.1285018c.29592169-.1666518.64208407-.2561137 1.00160427-.2561137.5026133 0 .97950576.1750753 1.32911493.4916681.72598912.6565871 1.68280283 1.0078952 2.67109137 1.0083319.9877-.0004367 1.9445263-.3517037 2.6710333-1.0087595.3491367-.3161652.8260292-.4912405 1.3286425-.4912405.5028479 0 .9795643.1750107 1.3292324.4914543.725724.6567679 1.6826278 1.008109 2.6713278 1.0085457.987581-.0004368 1.9447946-.351846 2.6704432-1.0085457.3496467-.3164242.826354-.4914543 1.3288787-.4914543.5028479 0 .9795643.1750107 1.3292324.4914543.6698295.6061843 1.5369688.9522395 2.4431705 1.0022354zm-8.0059505-15.50004556-1.999421.00109132c.0017379 1.66765868-.3914074 2.67484348-1.6096005 4.57626989l-.4357339.67326735c-1.1985316 1.8730246-1.7578573 3.1084741-1.9072678 4.7489216l2.013841.0007885c.1565646-1.2622433.6616712-2.2705308 1.7787146-3.9820993l.243287-.37580218c1.405662-2.19695557 1.9189882-3.50550246 1.9161806-5.64243718zm3.0005862.00002214c-.0019426 1.6881104-.3993036 2.69826243-1.6537336 4.66840333l-.3870791.60284703c-1.2033592 1.89238746-1.7606515 3.11545826-1.9109072 4.72843796h2.0148819c.1395749-1.0872185.5479182-1.9947141 1.4095297-3.3786139l.7616667-1.19781229c1.2938583-2.07979737 1.7634695-3.36210955 1.7656416-5.42219097zm5 0c-.0019426 1.6881104-.3993036 2.69826243-1.6537336 4.66840333l-.3870791.60284703c-1.2033592 1.89238746-1.7606515 3.11545826-1.9109072 4.72843796h2.0148819c.1395749-1.0872185.5479182-1.9947141 1.4095297-3.3786139l.7616667-1.19781229c1.2938583-2.07979737 1.7634695-3.36210955 1.7656416-5.42219097z"></path></svg>',
    //         type: 'Bathroom',
    //     },
    //     {
    //         id: '2d4a3cd2-f235-ffcd-2f7e-c9e0f5f5ae51',
    //         name: 'Free washer – In unit',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M26.29 2a3 3 0 0 1 2.96 2.58c.5 3.56.75 7.37.75 11.42s-.25 7.86-.75 11.42a3 3 0 0 1-2.79 2.57l-.17.01H5.7a3 3 0 0 1-2.96-2.58C2.25 23.86 2 20.05 2 16s.25-7.86.75-11.42a3 3 0 0 1 2.79-2.57L5.7 2zm0 2H5.72a1 1 0 0 0-1 .86A80.6 80.6 0 0 0 4 16c0 3.96.24 7.67.73 11.14a1 1 0 0 0 .87.85l.11.01h20.57a1 1 0 0 0 1-.86c.48-3.47.72-7.18.72-11.14 0-3.96-.24-7.67-.73-11.14A1 1 0 0 0 26.3 4zM16 7a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm-5.84 7.5c-.34 0-.68.02-1.02.07a7 7 0 0 0 13.1 4.58 9.09 9.09 0 0 1-6.9-2.37l-.23-.23a6.97 6.97 0 0 0-4.95-2.05zM16 9a7 7 0 0 0-6.07 3.5h.23c2.26 0 4.44.84 6.12 2.4l.24.24a6.98 6.98 0 0 0 6.4 1.9A7 7 0 0 0 16 9zM7 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>',
    //         type: 'Bedroom and laundry',
    //     },
    //     {
    //         id: 'bc985ecc-5ea2-3c2f-e01b-12043613e911',
    //         name: 'Free dryer – In unit',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M26.29 2a3 3 0 0 1 2.96 2.58c.5 3.56.75 7.37.75 11.42s-.25 7.86-.75 11.42a3 3 0 0 1-2.79 2.57l-.17.01H5.7a3 3 0 0 1-2.96-2.58C2.25 23.86 2 20.05 2 16s.25-7.86.75-11.42a3 3 0 0 1 2.79-2.57L5.7 2zm0 2H5.72a1 1 0 0 0-1 .86A80.6 80.6 0 0 0 4 16c0 3.96.24 7.67.73 11.14a1 1 0 0 0 .87.85l.11.01h20.57a1 1 0 0 0 1-.86c.48-3.47.72-7.18.72-11.14 0-3.96-.24-7.67-.73-11.14a1 1 0 0 0-.87-.85zM16 7a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm-4.8 5.58c1.36.2 2.64.8 3.68 1.75l.46.45a8.97 8.97 0 0 0 4.62 2.28 5.02 5.02 0 0 1-2.01 1.55 10.98 10.98 0 0 1-4.26-2.65 4.96 4.96 0 0 0-2.66-1.38 4.68 4.68 0 0 1 .17-2zm3.09-3.28c1.34.55 2.58 1.36 3.64 2.42a4.97 4.97 0 0 0 3 1.44 4.99 4.99 0 0 1-.07 2 6.97 6.97 0 0 1-4.11-1.8l-.47-.45a8.96 8.96 0 0 0-4.07-2.17 5 5 0 0 1 2.08-1.44zM7 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>',
    //         type: 'Bedroom and laundry',
    //     },
    //     {
    //         id: '0bbeb3bb-0b7d-f66d-d0e0-87a0533b3111',
    //         name: 'Hangers',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M16 2a5 5 0 0 1 1.66 9.72 1 1 0 0 0-.65.81l-.01.13v.81l13.23 9.05a3 3 0 0 1 1.3 2.28v.2a3 3 0 0 1-3 3H3.47a3 3 0 0 1-1.69-5.48L15 13.47v-.81a3 3 0 0 1 1.82-2.76l.17-.07a3 3 0 1 0-3.99-3V7h-2a5 5 0 0 1 5-5zm0 13.21L2.9 24.17A1 1 0 0 0 3.46 26h25.07a1 1 0 0 0 .57-1.82z"></path></svg>',
    //         type: 'Bedroom and laundry',
    //     },
    //     {
    //         id: 'a8f36c56-4032-1977-8252-b4d5af7a3ada',
    //         name: 'Iron',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M12 28a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM16.03 3h.3a12.5 12.5 0 0 1 11.82 9.48l.07.3 1.73 7.79.03.14A2 2 0 0 1 28.15 23H2.1a2 2 0 0 1-1.85-1.84v-7.38a5 5 0 0 1 4.77-4.77L5.25 9h9V5h-14V3zm11.53 16H2.25v2H28zM16.24 5v6H5.07a3 3 0 0 0-2.82 2.82V17H27.1l-.84-3.78-.07-.28a10.5 10.5 0 0 0-9.6-7.92L16.32 5z"></path></svg>',
    //         type: 'Bedroom and laundry',
    //     },
    //     {
    //         id: '3eccf027-d901-4891-0a1a-d9db99f60a95',
    //         name: 'HDTV with premium cable',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M9 29v-2h2v-2H6a5 5 0 0 1-5-4.78V8a5 5 0 0 1 4.78-5H26a5 5 0 0 1 5 4.78V20a5 5 0 0 1-4.78 5H21v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-3 2.82V20a3 3 0 0 0 2.82 3H26a3 3 0 0 0 3-2.82V8a3 3 0 0 0-2.82-3z"></path></svg>',
    //         type: 'Entertainment',
    //     },
    //     {
    //         id: 'cbd41cb0-ed22-c97e-1663-0c6166200b3a',
    //         name: 'Game console',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M30 2v2h-8a5 5 0 0 0-5 4.78V14h9a4 4 0 0 1 4 3.8V26a4 4 0 0 1-3.8 4H6a4 4 0 0 1-4-3.8V18a4 4 0 0 1 3.8-4H15V9a7 7 0 0 1 6.76-7H30zm-4 14H6a2 2 0 0 0-2 1.85V26a2 2 0 0 0 1.85 2H26a2 2 0 0 0 2-1.85V18a2 2 0 0 0-1.85-2H26zm-15 3v2h2v2h-2v2H9v-2H7v-2h2v-2h2zm13 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>',
    //         type: 'Entertainment',
    //     },
    //     {
    //         id: 'ba161f94-a955-ccea-5e80-489b3433b187',
    //         name: 'Crib',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M3 3v4h26V3h2v18a5 5 0 0 1-4 4.9V30h-2v-4H7v4H5v-4.1a5 5 0 0 1-4-4.68V3zm6 6H7v15h2zm4 0h-2v15h2zm4 0h-2v15h2zm4 0h-2v15h2zm4 0h-2v15h2zM5 9H3v12a3 3 0 0 0 2 2.83zm24 0h-2v14.83a3 3 0 0 0 2-2.65V21z"></path></svg>',
    //         type: 'Family',
    //     },
    //     {
    //         id: '70713435-1b3e-94be-5ce5-866fef772b51',
    //         name: 'Central air conditioning',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M17 1v4.03l4.03-2.32 1 1.73L17 7.34v6.93l6-3.47V5h2v4.65l3.49-2.02 1 1.74L26 11.38l4.03 2.33-1 1.73-5.03-2.9L18 16l6 3.46 5.03-2.9 1 1.73L26 20.62l3.49 2.01-1 1.74L25 22.35V27h-2v-5.8l-6-3.47v6.93l5.03 2.9-1 1.73L17 26.97V31h-2v-4.03l-4.03 2.32-1-1.73 5.03-2.9v-6.93L9 21.2V27H7v-4.65l-3.49 2.02-1-1.74L6 20.62l-4.03-2.33 1-1.73L8 19.46 14 16l-6-3.46-5.03 2.9-1-1.73L6 11.38 2.51 9.37l1-1.74L7 9.65V5h2v5.8l6 3.47V7.34l-5.03-2.9 1-1.73L15 5.03V1z"></path></svg>',
    //         type: 'Heating and cooling',
    //     },
    //     {
    //         id: '6a19ebb3-6a45-a9de-f875-95f051593986',
    //         name: 'Indoor fireplace: wood-burning',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M31 6v2h-1v23h-6V13H8v18H2V8H1V6zm-15.37 9 .96.7c3.32 2.42 5.14 5.06 5.38 7.93l.02.28v.21l.01.14c0 3.18-2.7 5.74-6 5.74a5.9 5.9 0 0 1-5.99-5.39v-.21l-.01-.15a9.3 9.3 0 0 1 1.64-4.99l.22-.34.68-.98 1.24.79zM28 8H4v21h2V13a2 2 0 0 1 1.7-1.98l.15-.01L8 11h16a2 2 0 0 1 2 1.85V29h2zM16 25.36l-.1.09c-.61.65-.9 1.23-.9 1.72 0 .42.41.83 1 .83s1-.4 1-.83c0-.45-.24-.97-.76-1.56l-.15-.16zm.35-7.32-1.77 3.56-1.46-.93-.15.27a7.28 7.28 0 0 0-.94 2.75l-.02.29-.01.26v.12c.03.92.4 1.76 1.03 2.4.14-1.14.86-2.24 2.1-3.33l.23-.2.64-.53.64.53c1.38 1.16 2.19 2.32 2.33 3.53A3.6 3.6 0 0 0 20 24.49l.01-.22V24c-.1-1.86-1.12-3.7-3.13-5.5l-.27-.24zM31 2v2H1V2z"></path></svg>',
    //         type: 'Heating and cooling',
    //     },
    //     {
    //         id: '4dddb9c9-96c9-7314-1beb-e981b6889277',
    //         name: 'Heating',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M16 0a5 5 0 0 1 5 4.78v12.98l.26.21a7.98 7.98 0 0 1 2.72 5.43l.02.3v.3a8 8 0 1 1-13.25-6.04l.25-.2V5A5 5 0 0 1 15.56.02l.22-.01zm0 2a3 3 0 0 0-3 2.82V18.78l-.43.3a6 6 0 1 0 7.06.15l-.2-.16-.43-.3V11h-4V9h4V7h-4V5h4a3 3 0 0 0-3-3zm1 11v7.13A4 4 0 0 1 16 28a4 4 0 0 1-1-7.87V13zm-1 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path></svg>',
    //         type: 'Heating and cooling',
    //     },
    //     {
    //         id: '2feaa505-307f-5b52-2103-167d2f88067d',
    //         name: 'Exterior security cameras on property',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M23 3a2 2 0 0 1 2 1.85v1.67l5-2v11.96l-5-2V16a2 2 0 0 1-1.85 2H16.9a5 5 0 0 1-3.98 3.92A5 5 0 0 1 8.22 26H4v4H2V20h2v4h4a3 3 0 0 0 2.87-2.13A5 5 0 0 1 7.1 18H4a2 2 0 0 1-2-1.85V5a2 2 0 0 1 1.85-2H4zM12 14a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm11-9H4v11h3.1a5 5 0 0 1 9.8 0H23zm5 2.48-3 1.2v3.64l3 1.2zM7 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>',
    //         type: 'Home safety',
    //     },
    //     {
    //         id: '1fa16022-cd29-f5fa-5bab-551227ceb5ee',
    //         name: 'Smoke alarm',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 2a13 13 0 1 0 0 26 13 13 0 0 0 0-26zm-4.9 14a5 5 0 0 0 3.9 3.9v2.03A7 7 0 0 1 9.07 17zm9.8 0h2.03A7 7 0 0 1 17 22.93V20.9a5 5 0 0 0 3.9-3.9zM16 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm1-5.93A7 7 0 0 1 22.93 15H20.9a5 5 0 0 0-3.9-3.9zm-2 0v2.03a5 5 0 0 0-3.9 3.9H9.07A7 7 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>',
    //         type: 'Home safety',
    //     },
    //     {
    //         id: '0098620c-eb2c-8998-897e-86c5512bee66',
    //         name: 'Fast wifi – 235 Mbps',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M16 20.33a3.67 3.67 0 1 1 0 7.34 3.67 3.67 0 0 1 0-7.34zm0 2a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34zM16 15a9 9 0 0 1 8.04 4.96l-1.51 1.51a7 7 0 0 0-13.06 0l-1.51-1.51A9 9 0 0 1 16 15zm0-5.33c4.98 0 9.37 2.54 11.94 6.4l-1.45 1.44a12.33 12.33 0 0 0-20.98 0l-1.45-1.45A14.32 14.32 0 0 1 16 9.66zm0-5.34c6.45 0 12.18 3.1 15.76 7.9l-1.43 1.44a17.64 17.64 0 0 0-28.66 0L.24 12.24c3.58-4.8 9.3-7.9 15.76-7.9z"></path></svg>',
    //         type: 'Internet and office',
    //     },
    //     {
    //         id: '85bed6bb-3351-a7cf-81f5-fa6e89edaa76',
    //         name: 'Kitchen',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M26 1a5 5 0 0 1 5 5c0 6.39-1.6 13.19-4 14.7V31h-2V20.7c-2.36-1.48-3.94-8.07-4-14.36v-.56A5 5 0 0 1 26 1zm-9 0v18.12c2.32.55 4 3 4 5.88 0 3.27-2.18 6-5 6s-5-2.73-5-6c0-2.87 1.68-5.33 4-5.88V1zM2 1h1c4.47 0 6.93 6.37 7 18.5V21H4v10H2zm14 20c-1.6 0-3 1.75-3 4s1.4 4 3 4 3-1.75 3-4-1.4-4-3-4zM4 3.24V19h4l-.02-.96-.03-.95C7.67 9.16 6.24 4.62 4.22 3.36L4.1 3.3zm19 2.58v.49c.05 4.32 1.03 9.13 2 11.39V3.17a3 3 0 0 0-2 2.65zm4-2.65V17.7c.99-2.31 2-7.3 2-11.7a3 3 0 0 0-2-2.83z"></path></svg>',
    //         type: 'Kitchen and dining',
    //     },
    //     {
    //         id: '08c65201-800a-6202-580e-f5a12dbb53eb',
    //         name: 'Refrigerator',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M25 1a2 2 0 0 1 2 1.85V29a2 2 0 0 1-1.85 2H7a2 2 0 0 1-2-1.85V3a2 2 0 0 1 1.85-2H7zm0 10H7v18h18zm-15 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM25 3H7v6h18zM10 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>',
    //         type: 'Kitchen and dining',
    //     },
    //     {
    //         id: 'b1b4b988-9f63-2c06-7924-baaf07f4a7c3',
    //         name: 'Microwave',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M29 3a2 2 0 0 1 2 1.85V27a2 2 0 0 1-1.85 2H3a2 2 0 0 1-2-1.85V5a2 2 0 0 1 1.85-2H3zm0 2H3v22h26zm-6 2v18H5V7zm-2 2H7v14h3a4.97 4.97 0 0 1-1-2.72V17h10v3a4.98 4.98 0 0 1-1 3h3zm-4 10h-6v1a3 3 0 0 0 2.65 2.98l.17.01.18.01a3 3 0 0 0 3-2.82V20zm9-8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>',
    //         type: 'Kitchen and dining',
    //     },
    //     {
    //         id: 'b0a88d9c-d7cc-fac1-a4c9-49870ccc9eff',
    //         name: 'Cooking basics',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M26 1a5 5 0 0 1 5 5c0 6.39-1.6 13.19-4 14.7V31h-2V20.7c-2.36-1.48-3.94-8.07-4-14.36v-.56A5 5 0 0 1 26 1zm-9 0v18.12c2.32.55 4 3 4 5.88 0 3.27-2.18 6-5 6s-5-2.73-5-6c0-2.87 1.68-5.33 4-5.88V1zM2 1h1c4.47 0 6.93 6.37 7 18.5V21H4v10H2zm14 20c-1.6 0-3 1.75-3 4s1.4 4 3 4 3-1.75 3-4-1.4-4-3-4zM4 3.24V19h4l-.02-.96-.03-.95C7.67 9.16 6.24 4.62 4.22 3.36L4.1 3.3zm19 2.58v.49c.05 4.32 1.03 9.13 2 11.39V3.17a3 3 0 0 0-2 2.65zm4-2.65V17.7c.99-2.31 2-7.3 2-11.7a3 3 0 0 0-2-2.83z"></path></svg>',
    //         type: 'Kitchen and dining',
    //     },
    //     {
    //         id: '7b9657a7-7b91-8219-91ef-29237bfabf23',
    //         name: 'Dishes and silverware',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M29 1v2a13 13 0 0 0-.3 26h.3v2a15 15 0 0 1-.31-30zM3 1h2v6h2V1h2v6h2V1h2v9a5 5 0 0 1-4 4.9V31H7V14.9a5.01 5.01 0 0 1-3.98-4.44L3 10.22V10zm26 6v2a7 7 0 0 0-.24 14H29v2a9 9 0 0 1-.27-18zM11 9H5v1.15a3 3 0 0 0 6 .03V10z"></path></svg>',
    //         type: 'Kitchen and dining',
    //     },
    //     {
    //         id: 'c9972c47-7f2b-d99a-b777-6e0302054b94',
    //         name: 'Freezer',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M25 1a2 2 0 0 1 2 1.85V29a2 2 0 0 1-1.85 2H7a2 2 0 0 1-2-1.85V3a2 2 0 0 1 1.85-2H7zm0 10H7v18h18zm-15 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM25 3H7v6h18zM10 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>',
    //         type: 'Kitchen and dining',
    //     },
    //     {
    //         id: '00f5456b-42bd-a480-2fec-92dba823958a',
    //         name: 'Dishwasher',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M28 2a2 2 0 0 1 2 1.85V28a2 2 0 0 1-1.85 2H4a2 2 0 0 1-2-1.85V4a2 2 0 0 1 1.85-2H4zm0 10H4v16h24zm-2 2v4a3 3 0 0 1-2 2.83V24h2v2h-6v-2h2v-3.17a3 3 0 0 1-2-2.65V14zm-14 0a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm12 0h-2v2a1 1 0 0 0 .77.97l.11.02.12.01a1 1 0 0 0 1-.88V18zm4-12H4v6h24zm-6 2v2H10V6zM7 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>',
    //         type: 'Kitchen and dining',
    //     },
    //     {
    //         id: 'aaa9965a-12d2-1820-531a-89d6072e208d\r\n',
    //         name: 'Wine glasses',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="m9.24 3-.2.4a20.37 20.37 0 0 0-1.7 5.02v.03A9 9 0 0 1 10.16 8c2.26 0 4.44.84 6.12 2.4l.24.24a6.98 6.98 0 0 0 4.95 2.05 6.99 6.99 0 0 0 3.53-.95v-.23a19.57 19.57 0 0 0-2.04-8.1l-.2-.41H9.24zm.92 7a7 7 0 0 0-3.11.73C7 11.15 7 11.57 7 12a9 9 0 0 0 9 9c4.06 0 7.7-3.14 8.72-6.92a9 9 0 0 1-3.25.6 8.98 8.98 0 0 1-6.13-2.4l-.23-.23A6.97 6.97 0 0 0 10.16 10zm13.8-9 .29.52A21.78 21.78 0 0 1 27 12c0 5.4-4.53 10.4-10 10.95V29h6v2H9v-2h6v-6.04A11 11 0 0 1 5 12c0-3.6.92-7.09 2.75-10.48L8.04 1h15.92z"></path></svg>',
    //         type: 'Kitchen and dining',
    //     },
    //     {
    //         id: 'e37c9d6e-45eb-2f43-4be4-67da228a0659',
    //         name: 'Coffee',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M25 2a1 1 0 0 1 .94.65l.03.1 1 4A1 1 0 0 1 26.11 8L26 8h-9v2h-2V8H5v20h3a5 5 0 0 1-.72-4.66l.1-.26 2.52-6.04-1.8-3.6a1 1 0 0 1 .78-1.43L9 12h14a1 1 0 0 1 .94 1.34l-.05.1L22.62 16H24a5 5 0 0 1 5 4.78V25h-2v-4a3 3 0 0 0-2.82-3H22.5l2.12 5.08A5 5 0 0 1 24 28h3v2H4a1 1 0 0 1-1-.88V3a1 1 0 0 1 .88-1H4zM12.65 22a6.64 6.64 0 0 0-2.91.63l-.5 1.22a3 3 0 0 0-.2.68l-.03.23L9 25a3 3 0 0 0 2.82 3h8.19l.23-.01a3 3 0 0 0 2.6-2.02c-1.7-.12-2.93-.67-4.84-1.9l-.37-.23c-2.14-1.4-3.18-1.84-4.98-1.84zm7.68-4h-8.66l-.92 2.19a9.06 9.06 0 0 1 1.9-.19c2.19 0 3.51.52 5.75 1.95l.38.25c1.74 1.13 2.74 1.62 4.03 1.76l-.04-.11zm1.05-4H10.62l1 2h8.76zm2.84-10H5v2h19.72z"></path></svg>',
    //         type: 'aKitchen and dinings',
    //     },
    //     {
    //         id: 'a25b1596-4a1d-9b95-5152-cd724226a8b2',
    //         name: 'Waterfront',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M28 2a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2H4v15.5h.19c.37-.04.72-.17 1-.38l.14-.11A3.98 3.98 0 0 1 8 18c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 18c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 18c.99 0 1.94.35 2.67 1 .35.33.83.5 1.33.5v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 20c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1v3h.19c.37-.04.72-.17 1-.38l.14-.11A3.98 3.98 0 0 1 8 23c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 23c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 23c.99 0 1.94.35 2.67 1 .35.33.83.5 1.33.5v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 25c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1V28h24zm-6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>',
    //         type: 'Location features',
    //     },
    //     {
    //         id: 'b6a4a74b-9545-bcc3-45a9-a8cc82d3b8a4',
    //         name: 'Beach access',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M24 27c.99 0 1.95.35 2.67 1 .3.29.71.45 1.14.5H28v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 29c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 29c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 29c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 27c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 27c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 27zm0-5c.99 0 1.95.35 2.67 1 .3.29.71.45 1.14.5H28v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 24c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 24c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 24c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 22c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 22c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 22zm0-5c.99 0 1.95.35 2.67 1 .3.29.71.45 1.14.5H28v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 19c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 19c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 19c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 17c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 17c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 17zM16 1a9 9 0 0 1 8.76 11.07c.71.13 1.37.45 1.91.94.3.27.71.44 1.14.48l.19.01v2h-.23a3.96 3.96 0 0 1-2.44-1 1.95 1.95 0 0 0-1.14-.5H23.96a2 2 0 0 0-1.15.38l-.14.11A3.98 3.98 0 0 1 20 15.5a3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 14c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1 1.95 1.95 0 0 0-1.14-.5H7.96a2 2 0 0 0-1.15.38l-.14.11a3.96 3.96 0 0 1-2.44 1L4 15.5v-2h.19a1.95 1.95 0 0 0 1.14-.5 3.92 3.92 0 0 1 1.9-.93A9 9 0 0 1 16 1zm0 2a7 7 0 0 0-6.64 9.23c.49.17.93.43 1.31.78.35.32.83.49 1.33.49.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 12c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5a2 2 0 0 0 1.2-.38l.13-.11c.38-.35.82-.6 1.3-.78A7 7 0 0 0 16 3z"></path></svg>',
    //         type: 'Location features',
    //     },
    //     {
    //         id: '35585fe4-756f-3d85-cb0a-511625c20f37',
    //         name: 'as',
    //         image: 'as',
    //         type: 'Location features',
    //     },
    //     {
    //         id: 'db4e546b-ffe0-2402-c330-9bcf1581ae52',
    //         name: 'Free parking on premises',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M26 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm20.7-5 .41 1.12A4.97 4.97 0 0 1 30 18v9a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2H8v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9c0-1.57.75-2.96 1.89-3.88L4.3 13H2v-2h3v.15L6.82 6.3A2 2 0 0 1 8.69 5h14.62c.83 0 1.58.52 1.87 1.3L27 11.15V11h3v2h-2.3zM6 25H4v2h2v-2zm22 0h-2v2h2v-2zm0-2v-5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v5h24zm-3-10h.56L23.3 7H8.69l-2.25 6H25zm-15 7h12v-2H10v2z"></path></svg>',
    //         type: 'Parking and facilities',
    //     },
    //     {
    //         id: '5d526d17-7407-1879-3308-f834b6f94be3',
    //         name: 'EV charger',
    //         image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M2 4h2v2h2V4h2v5a3 3 0 0 1-2 2.83V17a1 1 0 0 0 .88 1H10V5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v23h2v2H2v-2h8v-8H7a3 3 0 0 1-3-2.82v-5.35a3 3 0 0 1-2-2.64V4zm23 0H12.88A1 1 0 0 0 12 5v23h14V5a1 1 0 0 0-1-1zm-4.43 13-1.8 3H21a1 1 0 0 1 .91 1.41l-.05.1-2.1 3.49h-2.33l1.8-3H17a1 1 0 0 1-.91-1.41l.05-.1 2.1-3.49h2.33zM23 6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8zm-1 2h-6v4h6V8zM6 8H4v1a1 1 0 0 0 .77.97l.11.02L5 10a1 1 0 0 0 1-.88V8z"></path></svg>',
    //         type: 'Parking and facilities',
    //     },
    // ];
}
