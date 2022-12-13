import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  public item: Recipe;
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
      this.item = this.placesService.loadItems(paramMap.get('id'));
    });
  }
}
