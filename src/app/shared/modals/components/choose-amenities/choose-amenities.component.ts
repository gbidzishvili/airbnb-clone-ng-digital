import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FetchHotelsService } from '../../../../views/home-pg/services/fetch-hotels.service';
import { Observable, map } from 'rxjs';
import { Hotel } from '../../../../views/home-pg/models/hotel.model';
import { FetchAmenitiesService } from '../../../../views/home-pg/services/fetch-amenities.service';
import { amenity } from '../../../../views/home-pg/models';
import { FitlerService } from '../../sevices/fitler.service';

@Component({
    selector: 'app-choose-amenities',
    templateUrl: './choose-amenities.component.html',
    styleUrl: './choose-amenities.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChooseAmenitiesComponent implements OnInit {
    constructor(
        public fetchHotelsService: FetchHotelsService,
        public fetchAmenities: FetchAmenitiesService,
        public filterService: FitlerService
    ) {}
    ngOnInit(): void {
        this.initAmenities();
    }
    initAmenities() {
        this.fetchAmenities.fetchAmenities(
            'http://www.airbnb-digital-students.somee.com/getall'
        );
    }
    sendData(i: number, amenity: amenity) {
        this.filterService.buildUrlObject('amenity', amenity);
        // console.log(i, amenity);
    }
}
