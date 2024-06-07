import { Component, OnInit } from '@angular/core';
import { CarService } from '../../shared/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDetailModel } from '../../shared/models/cars/car-detail.model';

@Component({
  selector: 'app-car-description',
  templateUrl: './car-description.component.html',
  styleUrl: './car-description.component.scss',
})
export class CarDescriptionComponent implements OnInit {
  id: string | null = null;
  model: CarDetailModel | undefined;
  constructor(
    private _carService: CarService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    if (!this.id) {
      this._router.navigate(['/cars']);
    }

    this._carService.car(this.id!).subscribe((result) => {
      this.model = result as CarDetailModel;

      console.log(this.model);
    });
  }
}
