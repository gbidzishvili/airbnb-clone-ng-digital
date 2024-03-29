import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-home-pg',
    templateUrl: './home-pg.component.html',
    styleUrl: './home-pg.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePgComponent {}
