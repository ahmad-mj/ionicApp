import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  public item: Recipe;
  public form: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private navController: NavController,
    private placesService: RecipesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('id')) {
        this.navController.navigateBack('main/tabs/offers');
        return;
      }
      this.item = this.placesService.loadItem(paramMap.get('id'));
      this.form = new FormGroup({
        title: new FormControl(this.item.title, {
          updateOn: 'blur',
          validators: [Validators.required],
        }),
        description: new FormControl(this.item.description, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(200)],
        }),
      });
    });
  }

  public editOffer() {
    if (!this.form.valid) {
      return;
    }
    console.log('Add logic to save editing');
  }
}
