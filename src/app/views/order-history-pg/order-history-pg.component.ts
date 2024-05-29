import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, forkJoin, from, of, switchMap } from 'rxjs';
import { Hotel } from '../home-pg/models/hotel.model';
import { BaseProxyService } from '../../core/services/base-proxy.service';
import { Reservation } from '../confirm-reservation-pg/models/reservation.model';
@Component({
    selector: 'app-order-history-pg',
    templateUrl: './order-history-pg.component.html',
    styleUrl: './order-history-pg.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderHistoryPgComponent implements OnInit {
    // ngOnInit(): void {
    //     console.log(localStorage.getItem('hotels'));
    // }
    ErrorMessage!: string;
    hotels$!: Observable<any>;
    constructor(public baseProxySrv: BaseProxyService) {}
    ngOnInit() {
        this.initHotels();
    }
    initHotels() {
        this.hotels$ = this.baseProxySrv
            .get(
                'http://www.airbnb-digital-students.somee.com/get-reservations'
            )
            .pipe(
                switchMap((reservations: any): any => {
                    if (reservations.length === 0) return of([]);
                    const hotelObservables = reservations.map(
                        (reservation: Reservation) =>
                            this.baseProxySrv.getById(
                                reservation.hotelId,
                                'http://www.airbnb-digital-students.somee.com/get-by-id'
                            )
                    );
                    return forkJoin(hotelObservables);
                })
            );
    }
}
