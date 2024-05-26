import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { MaterialModule } from '../modules/material/material.module';
import { ReservationSummaryComponent } from './reservation-summary/reservation-summary.component';

@NgModule({
    declarations: [CarouselComponent, ReservationSummaryComponent],
    imports: [CommonModule, MaterialModule],
    exports: [CarouselComponent, ReservationSummaryComponent],
})
export class SharedComponentsModule {}
