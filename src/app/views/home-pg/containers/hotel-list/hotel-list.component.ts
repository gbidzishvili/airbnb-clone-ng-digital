import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-hotel-list',
    templateUrl: './hotel-list.component.html',
    styleUrl: './hotel-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelListComponent {
    @Input() title: string = '';
}
