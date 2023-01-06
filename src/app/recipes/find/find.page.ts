import { Component, OnDestroy, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.page.html',
  styleUrls: ['./find.page.scss'],
})
export class FindPage implements OnInit, OnDestroy {
  public loadedRecipes: Recipe[];
  public recipesSub: Subscription;

  constructor(private placesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesSub = this.placesService.recipes.subscribe(recipes => {
      this.loadedRecipes = recipes;

    });
  }

  public filter(event: CustomEvent<SegmentChangeEventDetail>): void {
    console.log(event);
  }

  ngOnDestroy(): void {
    if (this.recipesSub) {
      this.recipesSub.unsubscribe();
    }
  }
}
