import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
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
    public modalCtrl: ModalController,
    private actionSheetController: ActionSheetController,

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
  public async onClick() {
    // this.router.navigate(['main/tabs/explore']);


 await this.actionSheetController.create({
        header: 'Albums',
        buttons: [{
          text: 'Date',
          icon: 'calendar',
          role: 'confirm',
          handler: () => {
            console.log('Date clicked');
            this.openBookingModal('select');
          }
        }, {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
            this.openBookingModal('random');
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');

          }
        }]
      }).then(async ele => {
        await ele.present();
      });

  }

  public async openBookingModal(mode: 'select' | 'random') {
    console.log('Mode', mode );
    const bookingModal = await this.modalCtrl.create({
      component: CreateBookingComponent,
      componentProps: {booked: this.item}
      });

      await bookingModal.present();
      const { data } = await bookingModal.onDidDismiss();
      console.log(data);
      console.log('role: ',data.role);
      if (data.role === 'confirm') {
      console.log('BOOKED!:  ',data.role);

      }

  }

}
