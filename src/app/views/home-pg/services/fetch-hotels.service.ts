import { Injectable, OnDestroy } from '@angular/core';
import { BaseProxyService } from '../../../core/services/base-proxy.service';
import {
    BehaviorSubject,
    Observable,
    Subscription,
    catchError,
    map,
    of,
} from 'rxjs';
import { Hotel } from '../models/hotel.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Injectable()
export class FetchHotelsService {
    private hotelsSubject = new BehaviorSubject<Hotel[]>([]);
    get hotels$(): Observable<Hotel[]> {
        return this.hotelsSubject.asObservable();
    }

    constructor(private baseproxySrv: BaseProxyService) {}

    fetchHotels(url: string, filters: any = ''): any {
        this.baseproxySrv
            .get<Hotel[]>(url, filters)
            .pipe(
                untilDestroyed(this),
                catchError((err: Error) => of([]))
            )
            .subscribe((hotels: Hotel[]) => {
                this.hotelsSubject.next(hotels);
            });
    }
}
