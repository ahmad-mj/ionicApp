import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit, OnDestroy {
  public recipe: Recipe;
  public recipeSub: Subscription;
  constructor(
    private route: ActivatedRoute,
    private navController: NavController,
    private recipesService: RecipesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('id')) {
        this.navController.navigateBack('main/tabs/offers');
        return;
      }
      this.recipeSub = this.recipesService.loadItem(paramMap.get('id')).subscribe(recipe => {
        this.recipe = recipe;
      });
    });
  }
  ngOnDestroy(): void {
    if (this.recipeSub) {
    this.recipeSub.unsubscribe();
    }
  }
}
