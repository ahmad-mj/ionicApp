import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap, delay } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipesList = new BehaviorSubject<Recipe[]>([
    new Recipe(
      'p1',
      'Berlin, Kreuzberg Special Experience',
      'Calm recipe, where you can rest, hear chill music and smoke with nice folks',
      'https://c8.alamy.com/compde/b021f8/coffeeshop-amsterdam-coffee-shop-gemeinsame-haschisch-gras-canabis-marihuana-schmiere-marihuana-drogen-cannabis-b021f8.jpg',
      91,
      new Date('2020,01,01'),
      new Date('2021,12,12'),
      'a1'
    ),
    new Recipe(
      'p2',
      'Berlin, Mitte fancy Hash Shop',
      'city center',
      'https://cdn.thespaces.com/wp-content/uploads/2017/02/paris-apartments-for-rent-Rue-de-Varenne-III-3-1.jpg',
      199.99,
      new Date('2020,01,01'),
      new Date('2021,12,12'),
      'a2'
    ),
    new Recipe(
      'p3',
      'Alexander-Platz Great spot',
      'Stain the day and get high in the highest cannabis spot in Berlin ',
      'https://media.architecturaldigest.com/photos/60897ad53d446d6023247999/master/pass/viper2.jpg',
      299.99,
      new Date('2020,01,01'),
      new Date('2021,12,12'),
      'a3'
    ),
  ]);

  constructor(private authService: AuthService) {}

  get recipes() {
    return this.recipesList.asObservable();
  }

  loadItem(id: string) {
    return this.recipes.pipe(
      take(1),
      map((recipes) => ({ ...recipes.find((item) => item.id === id) }))
    );
  }

  addItem(
    title: string,
    description: string,
    price: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    const newItem = new Recipe(
      Math.random().toString(),
      title,
      description,
      'https://media.architecturaldigest.com/photos/60897ad53d446d6023247999/master/pass/viper2.jpg',
      price,
      dateFrom,
      dateTo,
      this.authService.userId
    );
    return this.recipes.pipe(
      take(1), delay(1000),
      tap((recipes) => {
          this.recipesList.next(recipes.concat(newItem));
      })
    );
  }
}
