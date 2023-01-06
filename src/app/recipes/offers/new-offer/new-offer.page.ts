import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { RecipesService } from '../../recipes.service';

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
  constructor(
    private recipeService: RecipesService,
    private router: Router,
    private loadingController: LoadingController
  ) {
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
        // validators: [Validators.required],
      }),
      dateTo: new FormControl(null, {
        updateOn: 'blur',
        // validators: [Validators.required],
      }),
    });
  }

  ngOnInit() {}
  public createOffer() {
    if (!this.form.valid) {
      return;
    }
    this.loadingController
      .create({
        message: 'Recipe is cooking..',
      })
      .then((loadingEl) => {
        loadingEl.present();
        this.recipeService
          .addItem(
            this.form.value.title,
            this.form.value.description,
            +this.form.value.price,
            this.form.value.dateFrom,
            this.form.value.dateTo
          )
          .subscribe(() => {
            loadingEl.dismiss();
            this.form.reset();
            this.router.navigate(['/main/tabs/offers']);
          });
      });
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
