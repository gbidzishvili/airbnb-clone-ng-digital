import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { DateRange } from '@angular/material/datepicker';
import { Loader } from '@googlemaps/js-api-loader';
import { FetchHotelsService } from '../home-pg/services/fetch-hotels.service';
import { BaseProxyService } from '../../core/services/base-proxy.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Hotel } from '../home-pg/models/hotel.model';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-details-pg',
    templateUrl: './details-pg.component.html',
    styleUrl: './details-pg.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [provideNativeDateAdapter()],
})
export class DetailsPgComponent implements OnInit, AfterViewInit {
    nights = new BehaviorSubject<number>(5);
    hotel$!: Observable<Hotel>;

    constructor(
        public baseProxySrv: BaseProxyService,
        public route: ActivatedRoute
    ) {}
    getNights(nights: any) {
        this.nights.next(nights);
    }
    ngOnInit(): void {
        this.route.paramMap.subscribe((paramsMap: ParamMap) => {
            const id = paramsMap.get('id');
            this.hotel$ = this.baseProxySrv.getById(
                id,
                'http://www.airbnb-digital-students.somee.com/get-by-id'
            );
        });
    }
    ngAfterViewInit() {
        // const loader = new Loader({
        //     apiKey: 'AIzaSyAYpfjjDa8iY-FI-Mc3b8YM4iUS60We7pQ',
        //     version: 'weekly',
        // });
        // loader.load().then(async () => {
        //     const { Map } = (await google.maps.importLibrary(
        //         'maps'
        //     )) as google.maps.MapsLibrary;
        //     let map = new Map(document.getElementById('map') as HTMLElement, {
        //         center: { lat: 41.7151377, lng: 44.827096 },
        //         zoom: 14,
        //     });
        // });
    }
}
