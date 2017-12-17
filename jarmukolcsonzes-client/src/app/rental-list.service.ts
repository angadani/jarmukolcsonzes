import { Injectable } from '@angular/core';

import { Rental } from '../rental';


@Injectable()
export class RentalListService {

  rentals: Array<Rental> = [
    new Rental("kettesbmw" ,"2017-12-01", "2018-02-02"),
    new Rental("nagymerci" , "2017-12-15", "2017-12-18")
  ]

  constructor() { }

  deleteRental(rental: Rental){
    this.rentals = this.rentals.filter(s => s !== rental);
  }

  addRental(rental: string, start: string, end: string){
    this.rentals.push(new Rental(rental, start, end));
  }

}
