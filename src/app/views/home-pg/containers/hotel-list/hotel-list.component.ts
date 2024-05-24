import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { BaseProxyService } from '../../../../core/services/base-proxy.service';
import { Hotel } from '../../models/hotel.model';
import { BehaviorSubject, Observable, skip, tap } from 'rxjs';
import { FetchHotelsService } from '../../services/fetch-hotels.service';
@Component({
    selector: 'app-hotel-list',
    templateUrl: './hotel-list.component.html',
    styleUrl: './hotel-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelListComponent implements OnInit {
    @Input() title: string = '';
    ErrorMessage!: string;
    hotels$!: Observable<Hotel[]>;
    constructor(public fetchHotelsSrv: FetchHotelsService) {}
    ngOnInit() {
        this.initHotels();
    }
    initHotels() {
        this.fetchHotelsSrv.fetchHotels(
            'http://www.airbnb-digital-students.somee.com/get-all-hotels'
        );
        this.hotels$ = this.fetchHotelsSrv.hotels$.pipe(
            skip(1),
            tap((hotels) => {
                this.ErrorMessage = !hotels?.length
                    ? 'No hotels found matching the criteria!'
                    : '';
            })
        );
    }
}
