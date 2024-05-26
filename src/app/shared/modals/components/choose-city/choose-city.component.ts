import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FetchHotelsService } from '../../../../views/home-pg/services/fetch-hotels.service';
import { Observable, map } from 'rxjs';
import { Hotel } from '../../../../views/home-pg/models/hotel.model';
import { FormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FitlerService } from '../../sevices/fitler.service';

@UntilDestroy()
@Component({
    selector: 'app-choose-city',
    templateUrl: './choose-city.component.html',
    styleUrl: './choose-city.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChooseCityComponent implements OnInit {
    cityControl = new FormControl();

    constructor(
        public fetchHotelsService: FetchHotelsService,
        public filterService: FitlerService
    ) {}

    ngOnInit() {
        this.cityControl.valueChanges
            .pipe(untilDestroyed(this))
            .subscribe((city) => {
                console.log('Selected city:', city);
                this.filterService.buildUrl('city', city);
            });
    }
    get cities$(): Observable<string[]> {
        return this.fetchHotelsService.hotels$.pipe(
            map((hotels: Hotel[]) => {
                const uniqueCities = new Set<string>();
                hotels.forEach((hotel) => {
                    if (hotel.address && hotel.address.city) {
                        uniqueCities.add(hotel.address.city);
                    }
                });
                return Array.from(uniqueCities);
            })
        );
    }
}
