import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {

  rentals: Array<string> = [
    'kisbmw egynap',
    'nagymerci 2nap'
  ];
  constructor() { }

  ngOnInit() {
  }

  deleteMe(rental: string) {
      this.rentals = this.rentals.filter(s => s !== rental);
  }

}
