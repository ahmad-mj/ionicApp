import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Place } from 'src/app/places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
@Input() public booked: Place;
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  public book() {
    this.modalController.dismiss({message: 'This is your message'}, 'confirm');
  }
  public onCancel() {
    this.modalController.dismiss(null, 'cancel');
  }

}
