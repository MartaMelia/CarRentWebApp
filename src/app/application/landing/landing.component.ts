import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { carsData } from '../cars/CarsData';
import { CarService } from '../../shared/car.service';
import { CarModel } from '../../shared/models/cars/car.model';
import { AuthService } from '../../shared/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../user/login/login.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  isLoggedIn!: boolean;
  constructor(
    private dialog: MatDialog,
    private _carService: CarService,
    private router: Router,
    private _authService: AuthService
  ) {}
  cars: CarModel[] = [];

  goToCarsPage() {
    this.router.navigate(['/cars']);
  }

  ngOnInit() {
    this.initCars();

    this._authService.loggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    });
  }

  initCars() {
    this._carService.random().subscribe((result) => {
      this.cars = result.cars.map(
        (x: any) =>
          new CarModel(
            x.id,
            x.brand,
            x.model,
            x.city,
            x.transmition,
            x.price,
            x.year,
            x.passengers,
            x.picture
          )
      );
    });
  }

  rent(id: string) {
    if (!this.isLoggedIn) {
      var dialog = this.dialog.open(LoginComponent);

      dialog.afterClosed().subscribe((result: boolean) => {
        if (result) {
          this.router.navigate([`/car-description/${id}`]);
        }
      });
    } else {
      this.router.navigate([`/car-description/${id}`]);
    }
  }
}
