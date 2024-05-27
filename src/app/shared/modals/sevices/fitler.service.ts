import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class FitlerService {
    myUrl = '?';
    urlBuildObj!: { [key: string]: string | string[] };
    constructor() {}

    buildUrl(filter: string, value: [] | string) {
        if (!Array.isArray(value)) {
            console.log('filter-value', filter, value);
            this.urlBuildObj[filter] = value;
            console.log(this.urlBuildObj);
        }
    }
}
