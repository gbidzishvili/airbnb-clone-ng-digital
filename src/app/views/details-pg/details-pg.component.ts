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
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
    selector: 'app-details-pg',
    templateUrl: './details-pg.component.html',
    styleUrl: './details-pg.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [provideNativeDateAdapter()],
})
export class DetailsPgComponent implements OnInit {
    nights = new BehaviorSubject<{
        nights: number;
        startDate: Date;
        endDate: Date;
    }>({
        nights: 5,
        startDate: new Date(),
        endDate: new Date(new Date().setDate(new Date().getDate() + 5)),
    });
    startDate = new BehaviorSubject<Date>(new Date());
    endDate = new BehaviorSubject<any>(
        new Date().setDate(new Date().getDate() + 5)
    );
    hotel$!: Observable<Hotel>;

    constructor(
        public baseProxySrv: BaseProxyService,
        public route: ActivatedRoute
    ) {}
    getNights(recivedObject: {
        nights: number;
        startDate: Date;
        endDate: Date;
    }) {
        this.nights.next(recivedObject);
    }
    ngOnInit(): void {
        this.route.paramMap
            .pipe(untilDestroyed(this))
            .subscribe((paramsMap: ParamMap) => {
                const id = paramsMap.get('id');
                this.hotel$ = this.baseProxySrv.getById(
                    id,
                    'http://www.airbnb-digital-students.somee.com/get-by-id'
                );
            });
    }
}
