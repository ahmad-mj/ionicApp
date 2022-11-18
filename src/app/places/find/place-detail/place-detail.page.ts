import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  public item: Place;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navController: NavController,
    private placesService: PlacesService,
    private modalController: ModalController,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('id')) {
        this.navController.navigateBack('main/tabs/explore');
        return;
      }
      this.item = this.placesService.loadItems(paramMap.get('id'));
    });
  }
  onClick() {
    // this.router.navigate(['main/tabs/explore']);
    this.modalController.create({
    component: CreateBookingComponent,
    componentProps: {booked: this.item}
    }).then(modalElement => {modalElement.present();
    modalElement.onDidDismiss();
    });
  }
}
