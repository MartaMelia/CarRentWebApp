export class CarDetailModel {
  constructor(
    public id: string,
    public brand: string,
    public model: string,
    public city: string,
    public transmition: string,
    public price: string,
    public year: string,
    public passangers: string,
    public pictures: string[],
    public phoneNumber: string,
    public fuelCapacity: string
  ) {}
}
