import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindPage } from './find.page';

const routes: Routes = [
  {
    path: '',
    component: FindPage
  },
  {
    path: 'recipe-detail',
    loadChildren: () => import('./recipe-detail/recipe-detail.module').then( m => m.PlaceDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindPageRoutingModule {}
