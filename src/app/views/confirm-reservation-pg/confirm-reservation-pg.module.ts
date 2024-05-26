import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmReservationPgComponent } from './confirm-reservation-pg.component';
import { ConfrimReservationRoutingModule } from './confirm-reservation-pg-routing.module';

@NgModule({
    declarations: [ConfirmReservationPgComponent],
    imports: [CommonModule, ConfrimReservationRoutingModule],
})
export class ConfirmReservationPgModule {}
