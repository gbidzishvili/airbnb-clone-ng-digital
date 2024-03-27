import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './authorization.component';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { SignInComponent } from './pages/sign-in-pg/sign-in.component';
import { RegistrationComponent } from './pages/registration-pg/registration.component';
import { MaterialModule } from '../../shared/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthorizationComponent,
    SignInComponent,
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class AuthorizationModule {}
