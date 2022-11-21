import { Injectable } from '@angular/core';
import { Booking } from './bookings.model';

@Injectable({ providedIn: 'root' })
export class BookingService {
  public bookings: Booking[] = [
    {
      id: '1',
      placeId: '310',
      userId: 'xy34g6',
      title: 'Berlin, Kreuzberg',
      guestNumber: 2,
    },
    {
      id: '2',
      placeId: '412',
      userId: 'gr31f0',
      title: 'Berlin Mitte',
      guestNumber: 1,
    },
  ];

  get booking() {
    return [...this.bookings];
  }
}
