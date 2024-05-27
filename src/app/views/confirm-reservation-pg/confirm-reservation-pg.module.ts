import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmReservationPgComponent } from './confirm-reservation-pg.component';
import { ConfrimReservationRoutingModule } from './confirm-reservation-pg-routing.module';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { MaterialModule } from '../../shared/modules/material/material.module';
import { PipesModule } from '../../shared/pipes/pipes.module';

@NgModule({
    declarations: [ConfirmReservationPgComponent],
    imports: [
        CommonModule,
        ConfrimReservationRoutingModule,
        SharedComponentsModule,
        MaterialModule,
        PipesModule,
    ],
})
export class ConfirmReservationPgModule {}
