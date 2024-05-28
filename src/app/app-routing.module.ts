import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'authorization', pathMatch: 'full' },
    {
        path: 'authorization',
        loadChildren: () =>
            import('./views/authorization/authorization.module').then(
                (m) => m.AuthorizationModule
            ),
    },
    {
        path: 'home',
        loadChildren: () =>
            import('./views/home-pg/home-pg.module').then(
                (m) => m.HomePgModule
            ),
    },
    {
        path: 'details',
        loadChildren: () =>
            import('./views/details-pg/details-pg.module').then(
                (m) => m.DetailsPgModule
            ),
    },
    {
        path: 'reservation',
        loadChildren: () =>
            import(
                './views/confirm-reservation-pg/confirm-reservation-pg.module'
            ).then((m) => m.ConfirmReservationPgModule),
    },
    {
        path: 'trip',
        loadChildren: () =>
            import('./views/order-history-pg/order-history-pg.module').then(
                (m) => m.OrderHistoryPgModule
            ),
    },
    {
        path: 'personal-info',
        loadChildren: () =>
            import('./views/update-info-pg/update-info-pg.module').then(
                (m) => m.UpdateInfoPgPgModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
