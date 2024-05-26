import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';

@UntilDestroy()
@Injectable({
    providedIn: 'root',
})
export class RouterService {
    public routeObservable!: BehaviorSubject<string[]>;

    constructor(private router: Router) {
        this.routeObservable = new BehaviorSubject<string[]>([]);
        this.router.events
            .pipe(untilDestroyed(this))
            .subscribe((event: any) => {
                if (event instanceof NavigationEnd) {
                    this.routeObservable.next(
                        event.urlAfterRedirects.split('/').splice(1)
                    );
                }
            });
    }
}
