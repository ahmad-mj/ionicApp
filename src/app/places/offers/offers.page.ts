import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  public loadedPlaces: Place[];
  constructor(private placesService: PlacesService, private router: Router) {}

  ngOnInit() {
    this.loadedPlaces = this.placesService.items;
  }

  public onEdit(id: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'main', 'tabs', 'offers', 'edit', id]);
    console.log(id);
  }
}
