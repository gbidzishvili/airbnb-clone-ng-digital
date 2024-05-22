import { CanDeactivateFn } from '@angular/router';
import { of } from 'rxjs';

export const logoutGuard: CanDeactivateFn<unknown> = (
    component,
    currentRoute,
    currentState,
    nextState
) => {
    const confirmDeactivate = window.confirm('Do you want to discard changes?');
    return of(confirmDeactivate);
};
