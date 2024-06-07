import { Component } from '@angular/core';
import { CarService } from '../../shared/car.service';
import { CarModel } from '../../shared/models/cars/car.model';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../../user/login/login.component';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss',
})
export class CarsComponent {
  isLoggedIn!: boolean;

  constructor(
    private _carService: CarService,
    private dialog: MatDialog,
    private router: Router
  ) {}
  cars: CarModel[] = [];

  ngOnInit() {
    this.initCars();
  }

  initCars() {
    this._carService.cars().subscribe((result) => {
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
