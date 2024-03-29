import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterModalComponent } from '../../../../navigation/components/header/filter-modal/filter-modal.component';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrl: './filter.component.scss',
})
export class FilterComponent {
    constructor(public dialog: MatDialog) {}

    openFilterModal() {
        const dialogRef = this.dialog.open(FilterModalComponent);

        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
