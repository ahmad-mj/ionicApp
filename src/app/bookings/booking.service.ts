import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Booking } from './bookings.model';

@Injectable({ providedIn: 'root' })
export class BookingService {
  public authService: AuthService;
  public bookings = new BehaviorSubject<Booking[]>([]);
  // public bookings: Booking[] = [
  //   {
  //     id: '1',
  //     placeId: '310',

  //     title: 'Berlin, Kreuzberg',
  //     guestNumber: 2,
  //   },
  //   {
  //     id: '2',
  //     placeId: '412',
  //     userId: 'gr31f0',
  //     title: 'Berlin Mitte',
  //     guestNumber: 1,
  //   },
  // ];

  get booking() {
    return this.bookings.asObservable();
  }

  public addBooking(
 placeId: string,
 userId: string,
 title: string,
 image: string,
 firstName: string,
 lastName: string,
 guestNumber: number,
 bookedFrom: number,
 bookedTo: number) {
    const newBooking = new Booking(Math.random().toString(), placeId, this.authService.userId, title, image, firstName, lastName, guestNumber, bookedFrom, bookedTo);
  this.bookings.pipe(take(1),delay(1000), tap(bookings => {
  this.bookings.next(bookings.concat(newBooking));
  }));
  }
}
