import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmReservationPgComponent } from './confirm-reservation-pg.component';
import { ConfrimReservationRoutingModule } from './confirm-reservation-pg-routing.module';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { MaterialModule } from '../../shared/modules/material/material.module';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { CreditcardDirective } from './directives/creditcard.directive';
import { ExpirationDateDirective } from './directives/expiration-date.directive';

@NgModule({
    declarations: [ConfirmReservationPgComponent, CreditcardDirective, ExpirationDateDirective],
    imports: [
        CommonModule,
        ConfrimReservationRoutingModule,
        SharedComponentsModule,
        MaterialModule,
        PipesModule,
        MaterialModule,
        MatSelectModule,
        ReactiveFormsModule,
    ],
})
export class ConfirmReservationPgModule {}
