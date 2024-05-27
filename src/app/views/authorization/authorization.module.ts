import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './authorization.component';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { SignInComponent } from './pages/sign-in-pg/sign-in.component';
import { RegistrationComponent } from '../../shared/components/registration-pg/registration.component';
import { MaterialModule } from '../../shared/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    declarations: [AuthorizationComponent, SignInComponent],
    imports: [
        CommonModule,
        AuthorizationRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
    ],
})
export class AuthorizationModule {}
