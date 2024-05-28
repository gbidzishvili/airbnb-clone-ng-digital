import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { authGuard } from '../../core/guard/auth.guard';
import { logoutGuard } from '../../core/guard/logout.guard';
import { UpdateInfoPgComponent } from './update-info-pg.component';

const routes: Routes = [
    {
        path: '',
        component: UpdateInfoPgComponent,
        canActivate: [authGuard],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UpdateInfoPgRoutingModule {}
