import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { Hotel } from '../home-pg/models/hotel.model';

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
    hotels$!: Observable<Hotel[]>;
    constructor() {}
    ngOnInit() {
        this.initHotels();
    }
    initHotels() {
        const hotelsString = localStorage.getItem('hotels');
        this.hotels$ = hotelsString ? of(JSON.parse(hotelsString)) : of([]);
    }
}
