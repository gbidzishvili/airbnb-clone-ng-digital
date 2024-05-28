import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidationService } from '../../../views/authorization/services/form-validation.service';
import { BaseProxyService } from '../../../core/services/base-proxy.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';

@UntilDestroy()
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
    @Input() personalInfo!: boolean;
    constructor(
        public validationSrv: FormValidationService,
        public baseProxySrv: BaseProxyService,
        public router: Router
    ) {}
    ngOnInit() {
        // this.router.events.pipe(untilDestroyed(this)).subscribe((url: any) => {
        //     console.log(url.routerEvent.url);
        // });
        this.initForm();
    }
    initForm() {
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
        let url = !this.personalInfo
            ? 'http://www.airbnb-digital-students.somee.com/api/user/registerUser'
            : 'http://www.airbnb-digital-students.somee.com/api/User/updateuserdata';
        console.log('url is:', url);
        const { confirmPassword, ...newUser } = this.registerForm.value;
        this.baseProxySrv
            .create(newUser, url)
            .subscribe((v) => console.log('value is printed:', v));
    }
    gotoSignIn() {
        this.router.navigate(['/authorization/sign-in']);
    }
}
