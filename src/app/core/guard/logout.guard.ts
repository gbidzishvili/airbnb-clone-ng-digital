import { CanDeactivateFn } from '@angular/router';
import { of } from 'rxjs';

export const logoutGuard: CanDeactivateFn<unknown> = (
    component,
    currentRoute,
    currentState,
    nextState
) => {
    console.log(
        component,
        currentRoute,
        currentState.url,
        nextState.url,
        nextState
    );
    console.log(nextState.url == '/authorization/sign-in');
    if (
        nextState.url === '/authorization/sign-in' ||
        nextState.url === '/authorization/registration'
    ) {
        alert('rame');
        return confirm('are u sure?');
    }
    // const confirmDeactivate = window.confirm('Do you want to discard changes?');
    // return of(confirmDeactivate);
    return true;
};
