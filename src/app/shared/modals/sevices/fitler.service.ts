import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class FitlerService {
    myUrl = '?';
    city!: string;
    constructor() {}

    buildUrl(filter: string, value: [] | string) {
        if (!Array.isArray(value)) {
            // this. = ""
        }
    }
}
