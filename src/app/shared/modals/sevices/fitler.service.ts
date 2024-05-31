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
    buildUrlObject(filterby: string, value: amenity | string) {
        if (filterby == 'amenity') {
            if (!this.urlBuildObj.amenities) this.urlBuildObj.amenities = [];
            if (this.urlBuildObj.amenities.includes(value)) {
                let id = this.urlBuildObj.amenities.indexOf(value);
                this.urlBuildObj.amenities.splice(id, 1);
                console.log('**************', 'obj:', this.urlBuildObj);
                return;
            }
            console.log('**************', 'obj:', this.urlBuildObj);
            this.urlBuildObj.amenities.push(value);
            return;
        }
        this.urlBuildObj[filterby] = value;
        console.log('**************', 'obj:', this.urlBuildObj);

        // if (typeof value == 'string' || typeof value == 'number') {
        //     this.urlBuildObj[filter] = value;
        // } else {
        //     if (!this.urlBuildObj.amenity) this.urlBuildObj.amenity = [];

        //     if (
        //         this.urlBuildObj.amenity[value.i] &&
        //         this.urlBuildObj.amenity[value.i] != ''
        //     ) {
        //         this.urlBuildObj.amenity[value.i] = '';
        //     } else {
        //         this.urlBuildObj.amenity[value.i] = value.amenity.name
        //             .split(' ')
        //             .join('%20');
        //     }
        // }
    }
    buildUrl() {
        this.myUrl = '?';
        console.log('build url', this.urlBuildObj);
        for (const [key, value] of Object.entries(this.urlBuildObj)) {
            console.log(`${key}: ${value}`);
            if (Array.isArray(value)) {
                for (let amenity of value) {
                    console.log('amenity', amenity);
                    // if (amenity != '') this.myUrl += `amenities=${amenity}&`;
                }
            } else {
                this.myUrl += `${key}=${value}&`;
            }
        }
        this.myUrl = this.myUrl.slice(0, this.myUrl.length - 1);
        console.log(this.myUrl);
        // this.myUrl = this.baseUrl + this.myUrl;
        // this.fetchHotelsService.fetchHotels(this.myUrl);
    }
}
