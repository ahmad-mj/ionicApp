import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.page.html',
  styleUrls: ['./find.page.scss'],
})
export class FindPage implements OnInit {
  public loadedRecipes: Recipe[];
  constructor(private placesService: RecipesService) {}

  ngOnInit() {
    this.loadedRecipes = this.placesService.items;
  }

  public filter(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event);
  }
}
