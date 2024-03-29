import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-authorization',
    templateUrl: './authorization.component.html',
    styleUrl: './authorization.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizationComponent {}
