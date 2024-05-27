import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { MaterialModule } from '../modules/material/material.module';
import { ReservationSummaryComponent } from './reservation-summary/reservation-summary.component';
import { HotelComponent } from './hotel/hotel.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
    declarations: [
        CarouselComponent,
        ReservationSummaryComponent,
        HotelComponent,
    ],
    imports: [CommonModule, MaterialModule, PipesModule],
    exports: [CarouselComponent, ReservationSummaryComponent, HotelComponent],
})
export class SharedComponentsModule {}
