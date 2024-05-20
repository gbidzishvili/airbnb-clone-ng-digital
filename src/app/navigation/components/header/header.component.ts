import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    constructor(public router: Router) {}
    navigateToRegister() {
        this.router.navigate(['authorization', 'registration']);
        console.log('sign up clicked');
    }
    navigateToLogin() {
        this.router.navigate(['authorization', 'sign-in']);
        console.log('sign in clicked');
    }
}
