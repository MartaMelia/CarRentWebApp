import { Component } from '@angular/core';
import { Car, cars, cities } from './cars';

@Component({
  selector: 'app-add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrl: './add-new-car.component.scss'
})
export class AddNewCarComponent {
  carBrands: Car[] = cars;
  selectedBrand!: string;

  selectedBrandModels: string[] = [];
  selectedModel: string = '';

  selectedYear!: number;
  years: number[] = [];

  cityList = cities;
  selectedTransmission: string = '';
  selectedCity: string = '';

  phoneNumber: number = 599001122;

  ngOnInit() {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1990; year--) {
      this.years.push(year);
    }
  }

  updateModels() {
    const selectedCar = this.carBrands.find(car => car.brand === this.selectedBrand);
    this.selectedBrandModels = selectedCar ? selectedCar.models : [];
  }

}
