// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { Tuple } from '../models/typle.model';
// @Injectable({
//   providedIn: 'root',
// })
// export class SuccessNotificationService {
//   // Tuple is Model from '../modles/tuple.model'
//   // Notification is Model from '../modles/notification.model'
//   successSub: BehaviorSubject<Tuple<boolean, Notification>> =
//     new BehaviorSubject(null);
//   successMap: Map<any, string> = new Map<any, string>();
//   private httpRequests: string[] = ['PATCH', 'POST', 'DELETE', 'PUT'];

//   constructor() {}

//   checkHttpRequestType(requestType: string): boolean {
//     return this.httpRequests.some((item) => item == requestType);
//   }

//   setSuccessNotification(url: string, Success: any): void {
//     if (!this.successMap.has(url)) {
//       this.successMap.set(url, Success);
//       this.successSub.next(
//         new Tuple<boolean, Notification>(
//           true,
//           new Notification(Success.statusText, '')
//         )
//       );
//     }
//   }
// }
