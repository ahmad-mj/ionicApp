import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  public form: FormGroup;
  datePicker = false;
  public dateValue = '2022-11-22T00:00:00+01:00';
  public dateMin: Date = null;
  public dateMax: Date = null;
  constructor() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(200)],
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)],
      }),
      dateFrom: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      dateTo: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
    });
  }

  ngOnInit() {}
  public createOffer() {
    if (!this.form.valid) {
      return;
    }
    console.log('Add logic to add a new-offer');
  }
  public showDatePicker() {
    this.datePicker = !this.datePicker;
    console.log('datepicker', this.datePicker);
  }
  public dateChanged(value) {
    this.dateValue = value;
    this.datePicker = false;
    console.log(value);
  }
}
