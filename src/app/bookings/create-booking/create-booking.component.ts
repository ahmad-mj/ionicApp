import { Component, Injectable, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Recipe } from 'src/app/recipes/recipe.model';

const WEEK = 7 * 24 * 60 * 60 * 1000;
@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() public selectedPlace: Recipe;
  @Input() public selectedMode: 'select' | 'random';
  public startDate;
  public endDate;
  public dateFrom: string;
  public dateTo: string;
  public bookingForm: FormGroup;
  constructor(private modalController: ModalController) {
    this.bookingForm = new FormGroup({
      firstName: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(1)],
      }),
      lastName: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(1)],
      }),
      guestNumber: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)],
      }),
      dateFrom: new FormControl(this.startDate, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      dateTo: new FormControl(this.endDate, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
    });
    this.dateFrom = this.bookingForm.value.dateFrom;
    this.dateTo = this.bookingForm.value.dateTo;
  }

  ngOnInit() {
    const availableFrom = new Date(this.selectedPlace.availableFrom);
    const availableTo = new Date(this.selectedPlace.availableTo);
    if (this.selectedMode === 'random') {
      // leave one week avalbale to book
      this.startDate = new Date(
        availableFrom.getTime() +
          Math.random() *
            (availableTo.getTime() - (WEEK - availableFrom.getTime()))
      ).toISOString();

      this.endDate = new Date(
        new Date(this.startDate).getTime() +
          Math.random() *
            (new Date(this.startDate).getTime() +
              WEEK -
              new Date(this.startDate).getTime())
      ).toISOString();
    }
  }

  public book() {
    if (!this.bookingForm.valid || !this.datesValid) {
      console.log(this.bookingForm);
      return;
    }

    this.modalController.dismiss(
      {
        bookingData: {
          firstname: this.bookingForm.value.firstName,
          lastName: this.bookingForm.value.lastName,
          guestNumber: this.bookingForm.value.guestNumber,
          dateFrom: this.bookingForm.value.dateFrom,
          dateTo: this.bookingForm.value.dateTo,
        },
      },
      'confirm'
    );
  }
  public onCancel() {
    this.modalController.dismiss(null, 'cancel');
  }

  public datesValid() {
    const startDate = new Date(this.bookingForm.value.dateFrom);
    const endDate = new Date(this.bookingForm.value.dateTo);
    return endDate > startDate;
  }
}
