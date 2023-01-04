import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  public loadedRecipes: Recipe[];
  constructor(private placesService: RecipesService, private router: Router) {}

  ngOnInit() {
    this.loadedRecipes = this.placesService.items;
  }

  public onEdit(id: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'main', 'tabs', 'offers', 'edit', id]);
    console.log(id);
  }
}