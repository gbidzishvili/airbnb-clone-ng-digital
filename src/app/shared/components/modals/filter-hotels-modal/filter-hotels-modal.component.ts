import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-filter-hotels-modal',
    templateUrl: './filter-hotels-modal.component.html',
    styleUrl: './filter-hotels-modal.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterHotelsModalComponent {}
