// import {
//   HttpErrorResponse,
//   HttpEvent,
//   HttpHandler,
//   HttpInterceptor,
//   HttpRequest,
// } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { Observable, Subject, catchError, throwError } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class ErrorInterceptorService implements HttpInterceptor {
//   static errorSubject: Subject<any> = new Subject<any>();

//   constructor(
//     // private errorNotification: ErrorNotificationService,
//     private router: Router // private authStorage: AuthStorageService, // private authService: AuthService
//   ) {}
//   intercept(
//     req: HttpRequest<unknown>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     return next.handle(req).pipe(
//       catchError((error: HttpErrorResponse) => {
//         if (
//           error.status === 401 ||
//           (error.status === 409 &&
//             error.error != undefined &&
//             error.error.status)
//         ) {
//           localStorage.clear();
//           sessionStorage.clear();
//           this.router.navigate(['auth']);
//         }
//         let errorMsg = '';
//         this.errorNotification.setErrorNotification((error as any).url, error);
//         if (error.error instanceof ErrorEvent) {
//           console.log('client side error');
//           errorMsg = `Error: ${error.error.message}`;
//         } else {
//           console.log('server side error');
//           errorMsg = `Error Code: ${error.status}, Message: ${error.message}`;
//         }
//         ErrorInterceptorService.errorSubject.next(error);
//         return throwError(errorMsg);
//       })
//     );
//   }
// }
