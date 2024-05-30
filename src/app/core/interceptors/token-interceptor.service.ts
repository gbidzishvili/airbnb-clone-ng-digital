import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
    constructor() {}
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const authToken = `Bearer ${localStorage.getItem('authToken')}`;
        const authReq = req.clone({
            headers: req.headers.set('Authorization', authToken),
        });
        return next.handle(authReq);
    }
}
