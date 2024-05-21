import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { BaseProxyService } from '../../../../core/services/base-proxy.service';
import { Hotel } from '../../models/hotel.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { FetchHotelsService } from '../../services/fetch-hotels.service';
@Component({
    selector: 'app-hotel-list',
    templateUrl: './hotel-list.component.html',
    styleUrl: './hotel-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelListComponent implements OnInit {
    @Input() title: string = '';
    constructor(public fetchHotelsSrv: FetchHotelsService) {}
    ngOnInit() {
        this.initHotels();
    }
    initHotels() {
        this.fetchHotelsSrv.fetchHotels(
            'http://www.airbnb-digital-students.somee.com/get-all-hotels'
        );
    }
}
