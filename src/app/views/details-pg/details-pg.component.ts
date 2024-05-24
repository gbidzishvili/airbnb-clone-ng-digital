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
import { Observable } from 'rxjs';
import { Hotel } from '../home-pg/models/hotel.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-details-pg',
    templateUrl: './details-pg.component.html',
    styleUrl: './details-pg.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [provideNativeDateAdapter()],
})
export class DetailsPgComponent implements OnInit, AfterViewInit {
    @Input() nights!: number;
    selectedRangeValue: DateRange<Date> | undefined;
    @Output() selectedRangeValueChange = new EventEmitter<DateRange<Date>>();
    hotel$!: Observable<Hotel>;
    datesForm = new FormGroup({
        startDate: new FormControl<Date | null>(null),
        endDate: new FormControl<Date | null>(null),
    });

    constructor(
        public baseProxySrv: BaseProxyService,
        public route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe((v: any) => {
            this.hotel$ = this.baseProxySrv.getById(
                v['params']['id'],
                'http://www.airbnb-digital-students.somee.com/get-by-id'
            );
            this.baseProxySrv
                .getById(
                    v['params']['id'],
                    'http://www.airbnb-digital-students.somee.com/get-by-id'
                )
                .subscribe((v) => console.log(v));
        });
    }
    ngAfterViewInit() {
        const loader = new Loader({
            apiKey: 'AIzaSyAYpfjjDa8iY-FI-Mc3b8YM4iUS60We7pQ',
            version: 'weekly',
        });

        loader.load().then(async () => {
            const { Map } = (await google.maps.importLibrary(
                'maps'
            )) as google.maps.MapsLibrary;
            let map = new Map(document.getElementById('map') as HTMLElement, {
                center: { lat: 41.7151377, lng: 44.827096 },
                zoom: 14,
            });
        });
    }
    selectedChange(m: any) {
        if (!this.selectedRangeValue?.start || this.selectedRangeValue?.end) {
            this.selectedRangeValue = new DateRange<Date>(m, null);
        } else {
            const start = this.selectedRangeValue.start;
            const end = m;
            if (end < start) {
                this.selectedRangeValue = new DateRange<Date>(end, start);
            } else {
                this.selectedRangeValue = new DateRange<Date>(start, end);
            }
            this.countDays(
                this.selectedRangeValue.start,
                this.selectedRangeValue.end
            );
        }
        this.selectedRangeValueChange.emit(this.selectedRangeValue);
    }
    countDays(start: any, end: any) {
        let startDate = new Date(start);
        let endDate = new Date(end);
        this.datesForm?.get('startDate')?.setValue(startDate);
        console.log(this.datesForm.get('startDate')?.value);
        // Calculate the difference in milliseconds. Ensure Operands Are Treated as Numbers
        let differenceInMilliseconds = +endDate - +startDate;
        let differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
        this.nights = differenceInDays;
    }
}
