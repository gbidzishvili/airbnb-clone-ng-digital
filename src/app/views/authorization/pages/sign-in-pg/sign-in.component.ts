import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { FormValidationService } from '../../services/form-validation.service';
import { BaseProxyService } from '../../../../core/services/base-proxy.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrl: './sign-in.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnInit {
    hide = true;
    public signInForm!: FormGroup;
    constructor(
        public validationSrv: FormValidationService,
        public baseProxySrv: BaseProxyService,
        public router: Router,
        private authService: AuthService
    ) {}
    ngOnInit(): void {
        this.signInForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.email,
            ]),
            password: new FormControl(null, [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(32),
            ]),
        });
    }

    onSignIn() {
        this.baseProxySrv
            .create(
                JSON.stringify(this.signInForm.value),
                'http://www.airbnb-digital-students.somee.com/api/User/LogIn',
                true
            )
            .subscribe(
                (response: any) => {
                    console.log(response);
                    if (response.body && response.body.jwt) {
                        this.authService.setToken(response.body.jwt);
                        this.router.navigate(['/home']);
                    }
                },
                (error) => {
                    alert('Login Failed!');
                    console.error('Login failed', error);
                }
            );
        console.log('rame');
    }
}
