import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in-pg/sign-in.component';
import { RegistrationComponent } from '../../shared/components/registration-pg/registration.component';
import { AuthorizationComponent } from './authorization.component';

const routes: Routes = [
    {
        path: '',
        component: AuthorizationComponent,
        children: [
            {
                path: '',
                redirectTo: 'sign-in',
                pathMatch: 'full',
            },
            {
                path: 'sign-in',
                component: SignInComponent,
            },
            {
                path: 'registration',
                component: RegistrationComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthorizationRoutingModule {}
