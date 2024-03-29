import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-hotel',
    templateUrl: './hotel.component.html',
    styleUrl: './hotel.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelComponent {}
