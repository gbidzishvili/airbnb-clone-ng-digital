import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { BaseProxyService } from '../../../../core/services/base-proxy.service';

@Component({
    selector: 'app-hotel-list',
    templateUrl: './hotel-list.component.html',
    styleUrl: './hotel-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelListComponent implements OnInit {
    @Input() title: string = '';
    constructor(private baseProxySrv: BaseProxyService) {}
    ngOnInit() {
        this.baseProxySrv
            .get('http://www.airbnb-digital-students.somee.com/getall')
            .subscribe((hotel) => console.log(hotel));
    }
    hotels = [
        {
            img: 'https://a0.muscache.com/im/pictures/miso/Hosting-49924321/original/cc3a98b7-d83e-4684-bb03-2b2ce6dd480d.jpeg?im_w=720',
            favorite: true,
            name: 'Treehouse in Index',
            stars: 5.0,
            views: 262,
            description: 'The TreeFramed Cabin',
            price: 485,
        },
        {
            img: 'https://a0.muscache.com/im/pictures/7cc3c855-f90e-4d0f-9b13-3b5c2a3c4bad.jpg?im_w=1200',
            favorite: true,
            name: 'BALIAN TREEHOUSE w beautiful pool',
            stars: 4.86,
            views: 328,
            description: 'Hut in Balian Beach, Indonesia',
            price: 485,
        },
        {
            img: 'https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=1200',
            favorite: true,
            name: 'Moinho das Feteiras | The Mill',
            stars: 5.0,
            views: 63,
            description:
                'Windmill in Ponta Delgada, Portugal  Windmill in Ponta Delgada, Portugal ',
            price: 799,
        },
        {
            img: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-755137040389728919/original/a56ee965-a235-4878-bd3d-8efb93de7297.jpeg?im_w=1200',
            favorite: true,
            name: 'Treehouse in Index',
            stars: 4.98,
            views: 162,
            description: 'The TreeFramed Cabin',
            price: 843,
        },
    ];
}
