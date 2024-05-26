import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { authGuard } from '../../core/guard/auth.guard';
import { logoutGuard } from '../../core/guard/logout.guard';
import { ConfirmReservationPgComponent } from './confirm-reservation-pg.component';

const routes: Routes = [
    {
        path: 'reservation',
        component: ConfirmReservationPgComponent,
        canActivate: [authGuard],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ConfrimReservationRoutingModule {}
