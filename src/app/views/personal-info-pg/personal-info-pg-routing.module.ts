import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { authGuard } from '../../core/guard/auth.guard';
import { logoutGuard } from '../../core/guard/logout.guard';
import { PersonalInfoPgComponent } from './personal-info-pg.component';

const routes: Routes = [
    {
        path: 'personal-info',
        component: PersonalInfoPgComponent,
        canActivate: [authGuard],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PersonalInfoPgRoutingModule {}
