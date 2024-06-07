import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { NavbarComponent } from './application/components/navbar/navbar.component';
import { FooterComponent } from './application/components/footer/footer.component';
import { CarsComponent } from './application/cars/cars.component';
import { LandingComponent } from './application/landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewCarComponent } from './application/profile/add-new-car/add-new-car.component';
import { RentedCarsComponent } from './application/profile/rented-cars/rented-cars.component';
import { FavoriteCarsComponent } from './application/profile/favorite-cars/favorite-cars.component';
import { OwnedCarsComponent } from './application/profile/owned-cars/owned-cars.component';
import { CarDescriptionComponent } from './application/car-description/car-description.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    CarsComponent,
    LandingComponent,
    AddNewCarComponent,
    RentedCarsComponent,
    FavoriteCarsComponent,
    OwnedCarsComponent,
    CarDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatMenuModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
