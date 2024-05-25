import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Hotel } from '../../../home-pg/models/hotel.model';
@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent {
    @Input() hotel!: Hotel;
}
