import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { authGuard } from '../../core/guard/auth.guard';
import { logoutGuard } from '../../core/guard/logout.guard';
import { OrderHistoryPgComponent } from './order-history-pg.component';

const routes: Routes = [
    {
        path: 'trip',
        component: OrderHistoryPgComponent,
        canActivate: [authGuard],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrderHistoryPgRoutingModule {}
