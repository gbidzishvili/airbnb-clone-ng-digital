import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidationService } from '../../services/form-validation.service';
import { BaseProxyService } from '../../../../core/services/base-proxy.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrl: './registration.component.scss',
    // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent implements OnInit {
    hidePass = true;
    hideConfirm = true;
    registerForm!: FormGroup;
    options = ['male', 'female'];
    constructor(
        public validationSrv: FormValidationService,
        public baseProxySrv: BaseProxyService
    ) {}
    ngOnInit() {
        this.registerForm = new FormGroup(
            {
                userName: new FormControl(null, Validators.required),
                email: new FormControl(null, [
                    Validators.required,
                    Validators.email,
                ]),
                phoneNumber: new FormControl(null, [
                    Validators.required,
                    Validators.minLength(9),
                    Validators.maxLength(9),
                ]),
                personalNumber: new FormControl(null, [
                    Validators.required,
                    Validators.maxLength(11),
                    Validators.minLength(11),
                ]),
                gender: new FormControl(null, [Validators.required]),
                password: new FormControl(null, [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(32),
                    Validators.pattern(
                        '^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*_.=+-]).+$'
                    ),
                ]),
                confirmPassword: new FormControl(null, Validators.required),
            },
            this.validationSrv.passwordMatch()
        );
    }
    onRegister() {
        const { confirmPassword, ...newUser } = this.registerForm.value;
        console.log(newUser);
        // this.baseProxySrv
        //     .create(
        //         JSON.stringify(newUser),
        //         'http://www.airbnb-digital-students.somee.com/api/user/registerUser',
        //         true
        //     )
        //     .subscribe((v) => console.log(v));
    }
}
