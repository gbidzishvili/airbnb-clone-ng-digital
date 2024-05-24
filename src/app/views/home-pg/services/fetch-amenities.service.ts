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

@Injectable({
    providedIn: 'root',
})
export class FetchAmenitiesService implements OnInit {
    private amenitiesSubject = new BehaviorSubject<amenity[]>([]);
    amenities$ = this.amenitiesSubject.asObservable();
    fetchSub = new Subscription();
    constructor(private baseProxySrv: BaseProxyService) {}
    ngOnInit(): void {}
    // fetchAmenities(): Observable<amenity[]> {
    //     return this.baseProxySrv.get<amenity[]>(
    //         'http://www.airbnb-digital-students.somee.com/getall'
    //     );
    // }
    fetchAmenities(url: string, filters: any = ''): any {
        this.fetchSub = this.baseProxySrv
            .get<amenity[]>(url, filters)
            .pipe(
                catchError((err: Error) => of([])),
                shareReplay(1)
            )
            .subscribe((amenitys: amenity[]) => {
                this.amenitiesSubject.next(amenitys);
            });
    }

    ngOnDestroy(): void {
        this.fetchSub.unsubscribe();
    }
}
