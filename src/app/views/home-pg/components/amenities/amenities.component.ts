import { trigger, transition, style, animate } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { amenity } from '../../models';
import { BaseProxyService } from '../../../../core/services/base-proxy.service';
import { Observable } from 'rxjs';
import { FetchHotelsService } from '../../services/fetch-hotels.service';
import { FetchAmenitiesService } from '../../services/fetch-amenities.service';

@Component({
    selector: 'app-amenities',
    templateUrl: './amenities.component.html',
    styleUrls: ['./amenities.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('slideInOut', [
            transition(':increment', [
                style({ transform: 'translateX(0%)' }),
                animate(
                    '200ms ease-out',
                    style({ transform: 'translateX(-80px)' })
                ),
            ]),
            transition(':decrement', [
                style({ transform: 'translateX(0%)' }),
                animate(
                    '200ms ease-out',
                    style({ transform: 'translateX(80px)' })
                ),
            ]),
        ]),
    ],
})
export class AmenitiesComponent implements OnInit {
    currentSlide = 0;
    maxVisibleItems = 10;
    itemWidth = 80; // in pixels
    selectedAmenities: any = [];
    // amenities$!: Observable<amenity[]>;
    constructor(
        public fetchAmenities: FetchAmenitiesService,
        private fetchHotelsSrv: FetchHotelsService,
        public baseProxySrv: BaseProxyService
    ) {}
    ngOnInit(): void {
        this.initAmenities();
    }
    initAmenities() {
        this.fetchAmenities.fetchAmenities(
            'http://www.airbnb-digital-students.somee.com/getall'
        );
    }
    previousSlide() {
        this.currentSlide -= 1;
    }

    nextSlide() {
        this.currentSlide += 1;
    }

    getContainerStyle() {
        return {
            transform: `translateX(-${this.currentSlide * this.itemWidth}px)`,
            transition: 'transform 0.5s ease-out',
        };
    }
    filterByAmenity(amenity: amenity, i: number) {
        if (this.selectedAmenities[i]) {
            this.selectedAmenities[i] = '';
        } else {
            this.selectedAmenities[i] = {
                amenities: amenity.name.split(' ').join('%20'),
            };
        }
        let url =
            'http://www.airbnb-digital-students.somee.com/api/Apartments/filter';
        this.fetchHotelsSrv.fetchHotels(url, this.selectedAmenities);
    }
}
