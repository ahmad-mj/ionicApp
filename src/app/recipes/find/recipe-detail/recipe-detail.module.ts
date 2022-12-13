import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceDetailPageRoutingModule } from './recipe-detail-routing.module';

import { PlaceDetailPage } from './recipe-detail.page';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    PlaceDetailPageRoutingModule,
  ],
  declarations: [PlaceDetailPage, CreateBookingComponent],
})
export class PlaceDetailPageModule {}
