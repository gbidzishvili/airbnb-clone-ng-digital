import { Injectable, OnInit } from '@angular/core';
import { BaseProxyService } from '../../../core/services/base-proxy.service';
import { amenity } from '../models/amenity.model';
import { Observable } from 'rxjs/internal/Observable';
import {
    BehaviorSubject,
    Subscription,
    catchError,
    of,
    shareReplay,
} from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Injectable({
    providedIn: 'root',
})
export class FetchAmenitiesService implements OnInit {
    private amenitiesSubject = new BehaviorSubject<amenity[]>([]);
    amenities$ = this.amenitiesSubject.asObservable();
    constructor(private baseProxySrv: BaseProxyService) {}
    ngOnInit(): void {}
    fetchAmenities(url: string, filters: any = ''): any {
        this.baseProxySrv
            .get<amenity[]>(url, filters)
            .pipe(
                untilDestroyed(this),
                catchError((err: Error) => of([])),
                shareReplay(1)
            )
            .subscribe((amenitys: amenity[]) => {
                this.amenitiesSubject.next(amenitys);
            });
    }
}
