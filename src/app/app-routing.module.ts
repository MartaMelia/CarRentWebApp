import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './application/landing/landing.component';
import { CarsComponent } from './application/cars/cars.component';
import { AddNewCarComponent } from './application/profile/add-new-car/add-new-car.component';
import { FavoriteCarsComponent } from './application/profile/favorite-cars/favorite-cars.component';
import { OwnedCarsComponent } from './application/profile/owned-cars/owned-cars.component';
import { RentedCarsComponent } from './application/profile/rented-cars/rented-cars.component';
import { CarDescriptionComponent } from './application/car-description/car-description.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'cars',
    component: CarsComponent,
  },
  {
    path: 'add-new-car',
    component: AddNewCarComponent,
  },
  {
    path: 'favorite-cars',
    component: FavoriteCarsComponent,
  },
  {
    path: 'owned-cars',
    component: OwnedCarsComponent,
  },
  {
    path: 'rented-cars',
    component: RentedCarsComponent,
  },
  {
    path: 'car-description/:id',
    component: CarDescriptionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
