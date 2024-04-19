import {
    ChangeDetectionStrategy,
    Component,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import { Hotel } from './models/hotel.model';

@Component({
    selector: 'app-home-pg',
    templateUrl: './home-pg.component.html',
    styleUrl: './home-pg.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePgComponent {
    @Input() hotelInfo!: Hotel;
}
