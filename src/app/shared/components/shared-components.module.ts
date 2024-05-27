import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { MaterialModule } from '../modules/material/material.module';
import { ReservationSummaryComponent } from './reservation-summary/reservation-summary.component';
import { HotelComponent } from './hotel/hotel.component';
import { PipesModule } from '../pipes/pipes.module';
import { RegistrationComponent } from './registration-pg/registration.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        CarouselComponent,
        ReservationSummaryComponent,
        HotelComponent,
        RegistrationComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        PipesModule,
        MatSelectModule,
        ReactiveFormsModule,
    ],
    exports: [
        CarouselComponent,
        ReservationSummaryComponent,
        HotelComponent,
        RegistrationComponent,
    ],
})
export class SharedComponentsModule {}
