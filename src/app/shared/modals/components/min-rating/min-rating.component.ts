import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FitlerService } from '../../sevices/fitler.service';
import { FormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
    selector: 'app-min-rating',
    templateUrl: './min-rating.component.html',
    styleUrl: './min-rating.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinRatingComponent implements OnInit {
    minRatingControl = new FormControl();

    constructor(public filterService: FitlerService) {}
    ngOnInit() {
        this.minRatingControl.valueChanges
            .pipe(untilDestroyed(this))
            .subscribe((rating) => {
                console.log('Selected rating:', rating);
                this.filterService.buildUrlObject('minRating', rating);
            });
    }
}
