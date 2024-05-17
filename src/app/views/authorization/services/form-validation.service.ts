import { TitleCasePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class FormValidationService {
    constructor() {}
    getControlError(form: FormGroup, controlName: string) {
        const control: AbstractControl = form.get(
            controlName
        ) as AbstractControl;
        return control.hasError('required')
            ? `${controlName} is required`
            : control.hasError('minlength')
            ? `the minimum ${controlName} length is ${control.errors?.['minlength']?.requiredLength} characters`
            : control.hasError('maxlength')
            ? `the maximum ${controlName} length is ${control.errors?.['maxlength']?.requiredLength} characters`
            : control.hasError('email')
            ? `not a valid email`
            : control.hasError('passwordMismatch')
            ? 'The passwords do not match'
            : control.hasError('pattern') && controlName === 'password'
            ? `weak ${controlName}. Try a mix of letters, numbers, and symbols.`
            : '';
    }
    passwordMatch(): ValidatorFn {
        return (formGroup: AbstractControl): { [key: string]: any } | null => {
            const passwordControl = formGroup.get('password');
            const confirmPasswordControl = formGroup.get('confirmPassword');

            if (!passwordControl || !confirmPasswordControl) {
                return null;
            }

            if (
                confirmPasswordControl.errors &&
                !confirmPasswordControl.errors['passwordMismatch']
            ) {
                return null;
            }

            if (passwordControl.value !== confirmPasswordControl.value) {
                confirmPasswordControl.setErrors({ passwordMismatch: true });
                return { passwordMismatch: true };
            }

            confirmPasswordControl.setErrors(null);
            return null;
        };
    }
}
