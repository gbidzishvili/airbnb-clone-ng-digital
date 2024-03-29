import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidationService } from '../../services/form-validation.service';

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
    constructor(public validationSrv: FormValidationService) {}
    ngOnInit() {
        this.registerForm = new FormGroup(
            {
                name: new FormControl(null, Validators.required),
                surName: new FormControl(null, Validators.required),
                email: new FormControl(null, [
                    Validators.required,
                    Validators.email,
                ]),
                phoneNumber: new FormControl(null, [
                    Validators.required,
                    Validators.maxLength(9),
                ]),
                password: new FormControl(null, [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(32),
                    Validators.pattern('^(?=.*d)(?=.*[a-zA-Z])(?=.*\\W).+$'),
                ]),
                confirmPassword: new FormControl(null, Validators.required),
            },
            this.validationSrv.passwordMatch()
        );
    }
    onRegister() {
        console.log(this.registerForm);
    }
}
