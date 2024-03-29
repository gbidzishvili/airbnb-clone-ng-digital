import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { FilterHotelsModalComponent } from './filter-hotels-modal/filter-hotels-modal.component';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    declarations: [FilterHotelsModalComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatSliderModule,
        MatListModule,
        MatCheckboxModule,
    ],
    exports: [FilterHotelsModalComponent],
})
export class ModalsModule {}
