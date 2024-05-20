import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { FilterHotelsModalComponent } from './filter-hotels-modal/filter-hotels-modal.component';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MaterialModule } from '../modules/material/material.module';
import { PriceRangeComponent } from './components-modal/price-range/price-range.component';

@NgModule({
    declarations: [FilterHotelsModalComponent, PriceRangeComponent],
    imports: [
        CommonModule,
        MatListModule,
        MatCheckboxModule,
        MaterialModule,
        ReactiveFormsModule,
        MatSliderModule,
    ],
    exports: [FilterHotelsModalComponent],
})
export class ModalsModule {}
