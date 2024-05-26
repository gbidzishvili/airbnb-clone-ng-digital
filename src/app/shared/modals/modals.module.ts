import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { FilterHotelsModalComponent } from './filter-hotels-modal/filter-hotels-modal.component';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MaterialModule } from '../modules/material/material.module';
import { PriceRangeComponent } from './components/price-range/price-range.component';
import { MatSelectModule } from '@angular/material/select';
import { ChooseCityComponent } from './components/choose-city/choose-city.component';
import { MinRatingComponent } from './components/min-rating/min-rating.component';
import { ChooseAmenitiesComponent } from './components/choose-amenities/choose-amenities.component';
import { FilterFooterComponent } from './components/filter-footer/filter-footer.component';

@NgModule({
    declarations: [
        FilterHotelsModalComponent,
        PriceRangeComponent,
        ChooseCityComponent,
        MinRatingComponent,
        ChooseAmenitiesComponent,
        FilterFooterComponent,
    ],
    imports: [
        CommonModule,
        MatListModule,
        MatCheckboxModule,
        MaterialModule,
        ReactiveFormsModule,
        MatSliderModule,
        MatSelectModule,
        ReactiveFormsModule,
    ],
    exports: [FilterHotelsModalComponent],
})
export class ModalsModule {}
