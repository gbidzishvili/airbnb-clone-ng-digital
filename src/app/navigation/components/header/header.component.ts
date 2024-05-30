import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../../../views/authorization/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
    hasAuthToken: boolean = false;
    constructor(public router: Router, public authService: AuthService) {}
    ngOnInit(): void {
        this.checkAuthToken();
    }

    checkAuthToken() {
        this.hasAuthToken = !!localStorage.getItem('authToken');
    }
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
