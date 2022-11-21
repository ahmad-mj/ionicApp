import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { BookingService } from './booking.service';
import { Booking } from './bookings.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  loadedItems: Booking[];
  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.loadedItems = this.bookingService.bookings;
  }

  public cancelBooking(id: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    //Todo: cancel booking with id
  }
}
