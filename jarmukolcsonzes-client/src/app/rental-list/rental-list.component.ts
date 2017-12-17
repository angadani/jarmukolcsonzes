import { Component, OnInit } from '@angular/core';
import { RentalListService } from "../rental-list.service";


@Component({
  selector: 'rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {


  constructor(public rentalListService: RentalListService) { }

  ngOnInit() {
  }



}
