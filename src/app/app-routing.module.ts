import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
    import('./auth/auth.module').then((m) => m.AuthPageModule)
  },
  {
    // canActivate: [AuthGuard],
    path: 'main',
    loadChildren: () =>
    import('./recipes/recipes.module').then((m) => m.RecipesPageModule),
  },
  {
    // canActivate: [AuthGuard],
    path: 'bookings',
    loadChildren: () =>
    import('./bookings/bookings.module').then((m) => m.BookingsPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
