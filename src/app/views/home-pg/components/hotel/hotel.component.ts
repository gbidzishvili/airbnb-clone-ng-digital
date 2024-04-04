import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Hotel } from '../../models/hotel.model';

@Component({
    selector: 'app-hotel',
    templateUrl: './hotel.component.html',
    styleUrl: './hotel.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelComponent {
    @Input() hotelInfo!: Hotel;
}
