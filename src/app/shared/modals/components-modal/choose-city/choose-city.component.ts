import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FetchHotelsService } from '../../../../views/home-pg/services/fetch-hotels.service';
import { Observable, map } from 'rxjs';
import { Hotel } from '../../../../views/home-pg/models/hotel.model';

@Component({
    selector: 'app-choose-city',
    templateUrl: './choose-city.component.html',
    styleUrl: './choose-city.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChooseCityComponent implements OnInit {
    constructor(public fetchHotelsService: FetchHotelsService) {}

    ngOnInit() {
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
