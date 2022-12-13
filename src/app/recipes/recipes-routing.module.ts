import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesPage } from './recipes.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: RecipesPage,
    children: [
      {
        path: 'explore',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./find/find.module').then((m) => m.FindPageModule),
          },
          {
            path: ':id',
            loadChildren: () =>
              import('./find/recipe-detail/recipe-detail.module').then(
                (m) => m.PlaceDetailPageModule
              ),
          },
        ],
      },
      {
        path: 'offers',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./offers/offers.module').then((m) => m.OffersPageModule),
          },
          {
            path: 'new',
            loadChildren: () =>
              import('./offers/new-offer/new-offer.module').then(
                (m) => m.NewOfferPageModule
              ),
          },
          {
            path: 'edit/:id',
            loadChildren: () =>
              import('./offers/edit-offer/edit-offer.module').then(
                (m) => m.EditOfferPageModule
              ),
          },
          {
            path: ':id',
            loadChildren: () =>
              import('./offers/offer-bookings/offer-bookings.module').then(
                (m) => m.OfferBookingsPageModule
              ),
          },
        ],
      },
      {
        path: '',
        redirectTo: '/main/tabs/explore',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/main/tabs/explore',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesPageRoutingModule {}
