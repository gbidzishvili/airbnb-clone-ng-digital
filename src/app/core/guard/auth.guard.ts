import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../views/authorization/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
    if (inject(AuthService).isAuthenticated()) {
        inject(Router).navigate(['/home']);
        return true;
    }
    inject(Router).navigate(['/']);
    return false;
};
