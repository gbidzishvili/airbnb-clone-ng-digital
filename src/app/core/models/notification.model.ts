export class Notification {
  constructor(
    public title: string,
    public message: string,
    public httpCode: number
  ) {}
}
