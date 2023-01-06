import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit, OnDestroy {
  public loadedRecipes: Recipe[];
  public recipesSub: Subscription;
  constructor(private recipesService: RecipesService, private router: Router) {}

  ngOnDestroy(): void {
    if (this.recipesSub) {
      this.recipesSub.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.recipesSub = this.recipesService.recipes.subscribe((recipes) => {
      this.loadedRecipes = recipes;
    });
  }

  public onEdit(id: string, slidingItem: IonItemSliding): void {
    slidingItem.close();
    this.router.navigate(['/', 'main', 'tabs', 'offers', 'edit', id]);
    console.log(id);
  }
}
