import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePgComponent } from './home-pg.component';
import { authGuard } from '../../core/guard/auth.guard';
import { logoutGuard } from '../../core/guard/logout.guard';

const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'home',
    //     pathMatch: 'full',
    //     // canActivate: [authGuard],
    // },
    { path: '', component: HomePgComponent, canActivate: [authGuard] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomePgRoutingModule {}
