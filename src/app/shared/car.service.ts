import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private _http: HttpService) {}

  random() {
    return this._http.get('car/random');
  }

  car(id: string) {
    return this._http.get(`car/details?id=${id}`);
  }

  cars() {
    return this._http.get('car/all');
  }
}
