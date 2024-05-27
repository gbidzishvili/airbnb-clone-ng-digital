import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FitlerService } from '../../sevices/fitler.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FilterHotelsModalComponent } from '../../filter-hotels-modal/filter-hotels-modal.component';

@Component({
    selector: 'app-filter-footer',
    templateUrl: './filter-footer.component.html',
    styleUrl: './filter-footer.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterFooterComponent {
    constructor(
        public filterService: FitlerService,
        private dialogRef: MatDialogRef<FilterHotelsModalComponent>
    ) {}
    onCloseBtnClick() {
        this.dialogRef.close('Optional result data');
    }
    onFilterBtnClick() {
        console.log(this.filterService.urlBuildObj);
        this.filterService.buildUrl();
        this.dialogRef.close('Optional result data');
    }
}
