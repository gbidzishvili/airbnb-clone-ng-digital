import { Notification } from './notification.model'; // Update the import path as needed

export class Tuple<T1, T2> {
  constructor(public item1: T1, public item2: T2) {}
}

// Usage:
const booleanNotificationTuple = new Tuple<boolean, Notification>(
  true,
  new Notification('Title', 'Message', 200)
);
