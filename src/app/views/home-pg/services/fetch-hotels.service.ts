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

@Injectable()
export class FetchHotelsService implements OnDestroy {
    private hotelsSubject = new BehaviorSubject<Hotel[]>([]);
    fetchSub = new Subscription();
    get hotels$(): Observable<Hotel[]> {
        return this.hotelsSubject.asObservable();
    }

    constructor(private baseproxySrv: BaseProxyService) {}

    fetchHotels(url: string, filters: any = ''): any {
        this.fetchSub = this.baseproxySrv
            .get<Hotel[]>(url, filters)
            .pipe(catchError((err: Error) => of([])))
            .subscribe((hotels: Hotel[]) => {
                this.hotelsSubject.next(hotels);
                console.log(hotels);
            });
    }

    ngOnDestroy(): void {
        this.fetchSub.unsubscribe();
    }
}
