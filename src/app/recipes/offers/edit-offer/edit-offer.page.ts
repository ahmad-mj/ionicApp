import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit, OnDestroy {
  public recipe: Recipe;
  public form: FormGroup;
  private recipeSub: Subscription;
  constructor(
    private route: ActivatedRoute,
    private navController: NavController,
    private recipesService: RecipesService,
    private loadingController: LoadingController,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('id')) {
        this.navController.navigateBack('main/tabs/offers');
        return;
      }
      this.recipeSub = this.recipesService
      .loadItem(paramMap.get('id'))
      .subscribe((recipe) => {
        this.recipe = recipe;
      });
      this.form = new FormGroup({
        title: new FormControl(this.recipe.title, {
          updateOn: 'blur',
          validators: [Validators.required],
        }),
        description: new FormControl(this.recipe.description, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(200)],
        }),
      });
    });
  }

  ngOnDestroy(): void {
    if (this.recipeSub) {
      this.recipeSub.unsubscribe();
    }
  }
  public onUpdate() {
    if (!this.form.valid) {
      return;
    }
    this.loadingController.create({
    message: 'Adding some spices'
    }).then(loadingEl => {
    loadingEl.present();
    this.recipesService
      .updateItem(
        this.recipe.id,
        this.form.value.title,
        this.form.value.description
      ).subscribe(() => {
        loadingEl.dismiss();
        this.form.reset();
        this.router.navigate(['/main/tabs/offers']);
      });
    });
    console.log('Add logic to save editing');
  }
}
