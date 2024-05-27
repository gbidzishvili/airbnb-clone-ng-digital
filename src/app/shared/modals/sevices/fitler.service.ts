import { Injectable } from '@angular/core';
import { amenity } from '../../../views/home-pg/models';
import { BaseProxyService } from '../../../core/services/base-proxy.service';
import { FetchHotelsService } from '../../../views/home-pg/services/fetch-hotels.service';
import { Hotel } from '../../../views/home-pg/models/hotel.model';

@Injectable({
    providedIn: 'root',
})
export class FitlerService {
    myUrl = '?';
    baseUrl =
        'http://www.airbnb-digital-students.somee.com/api/Apartments/filter';
    urlBuildObj: any = {};
    constructor(public fetchHotelsService: FetchHotelsService) {}

    buildUrlObject(
        filter: string,
        value: { i: number; amenity: amenity } | string
    ) {
        if (typeof value == 'string' || typeof value == 'number') {
            console.log('filter-value', filter, value);
            this.urlBuildObj[filter] = value;
            console.log(this.urlBuildObj);
        } else {
            if (!this.urlBuildObj.amenity) {
                this.urlBuildObj.amenity = [];
            }

            if (
                this.urlBuildObj.amenity[value.i] &&
                this.urlBuildObj.amenity[value.i] != ''
            )
                this.urlBuildObj.amenity[value.i] = '';
            else {
                this.urlBuildObj.amenity[value.i] = value.amenity.name
                    .split(' ')
                    .join('%20');
            }
        }
    }
    buildUrl() {
        this.myUrl = '?';
        for (const [key, value] of Object.entries(this.urlBuildObj)) {
            console.log(`${key}: ${value}`);
            if (Array.isArray(value)) {
                for (let amenity of value) {
                    if (amenity != '') this.myUrl += `amenities=${amenity}&`;
                }
            } else {
                this.myUrl += `${key}=${value}&`;
            }
        }
        this.myUrl = this.myUrl.slice(0, this.myUrl.length - 1);
        this.myUrl = this.baseUrl + this.myUrl;
        this.fetchHotelsService.fetchHotels(this.myUrl);
    }
}
