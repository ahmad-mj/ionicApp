export class Booking {
  constructor(
    public id: string,
    public placeId: string,
    public userId: string,
    public title: string,
    public image: string,
    public firstName: string,
    public lastName: string,
    public guestNumber: number,
    public bookedFrom: number,
    public bookedTo: number
  ) {}
}
