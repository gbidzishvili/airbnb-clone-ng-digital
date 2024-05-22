import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-min-rating',
    templateUrl: './min-rating.component.html',
    styleUrl: './min-rating.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinRatingComponent {}
