import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _items: Place[] = [
    new Place(
      'p1',
      'Berlin Cosy apartment',
      'nice place near a lake',
      'https://berlin.homecompany.de/images/immodb2/4/23422/wohnen.jpg',
      91
    ),
    new Place(
      'p2',
      'Paris fancy apartment',
      'city center',
      'https://cdn.thespaces.com/wp-content/uploads/2017/02/paris-apartments-for-rent-Rue-de-Varenne-III-3-1.jpg',
      199.99
    ),
    new Place(
      'p3',
      'NewYork Great spot',
      'city center',
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
