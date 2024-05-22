import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePgComponent } from './home-pg.component';
import { authGuard } from '../../core/guard/auth.guard';
import { logoutGuard } from '../../core/guard/logout.guard';

const routes: Routes = [
    { path: 'home', component: HomePgComponent, canActivate: [authGuard],canDeactivate: [logoutGuard] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomePgRoutingModule {}
