import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
    Observable,
    concat,
    filter,
    from,
    interval,
    map,
    mergeMap,
    of,
    take,
} from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    ngOnInit(): void {}
}
