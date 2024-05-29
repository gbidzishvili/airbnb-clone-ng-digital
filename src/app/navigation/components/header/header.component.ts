import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../../../views/authorization/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    constructor(public router: Router, public authService: AuthService) {}
    // navigateToRegister() {
    //     this.router.navigate(['authorization/registration']);
    //     // console.log('sign up clicked');
    // }
    // navigateToLogin() {
    //     this.router.navigate(['authorization/sign-in']);
    //     // console.log('sign in clicked');
    // }
    // navigateToHome() {
    //     this.router.navigate(['home']);
    // }
    navigateTo(route: string, logout: boolean = false) {
        if (logout) {
            if (confirm('do you want to leave the page?')) {
                this.authService.clearToken();
                this.router.navigate([route]);
            }
            return;
        }
        this.router.navigate([route]);
    }
}
