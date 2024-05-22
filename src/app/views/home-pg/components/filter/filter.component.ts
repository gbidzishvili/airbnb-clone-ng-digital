import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterHotelsModalComponent } from '../../../../shared/modals/filter-hotels-modal/filter-hotels-modal.component';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrl: './filter.component.scss',
})
export class FilterComponent implements OnInit {
    constructor(public dialog: MatDialog) {}
    ngOnInit(): void {
        const dialogRef = this.dialog.open(FilterHotelsModalComponent);
    }
    openFilterModal() {
        const dialogRef = this.dialog.open(FilterHotelsModalComponent);
        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
