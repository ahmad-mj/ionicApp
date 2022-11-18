import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _items: Place[] = [
    new Place(
      'p1',
      'Berlin, Kreuzberg Special Experience',
      'Calm place, where you can rest, hear chill music and smoke with nice folks',
      'https://c8.alamy.com/compde/b021f8/coffeeshop-amsterdam-coffee-shop-gemeinsame-haschisch-gras-canabis-marihuana-schmiere-marihuana-drogen-cannabis-b021f8.jpg',
      91
    ),
    new Place(
      'p2',
      'Berlin, Mitte fancy Hash Shop',
      'city center',
      'https://cdn.thespaces.com/wp-content/uploads/2017/02/paris-apartments-for-rent-Rue-de-Varenne-III-3-1.jpg',
      199.99
    ),
    new Place(
      'p3',
      'Alexander-Platz Great spot',
      'Stain the day and get high in the highest cannabis spot in Berlin ',
      'https://media.architecturaldigest.com/photos/60897ad53d446d6023247999/master/pass/viper2.jpg',
      299.99
    ),
  ];

  constructor() {}

  get items() {
    return [...this._items];
  }

  loadItems(id: string) {
    return { ...this._items.find((item) => item.id === id) };
  }
}
