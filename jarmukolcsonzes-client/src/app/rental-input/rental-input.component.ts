import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RentalListService } from '../rental-list.service';
import { Rental } from "../../rental";

class RentalForm {
  car: string;
  start: string;
  end: string;
}

@Component({
  selector: 'rental-input',
  templateUrl: './rental-input.component.html',
  styleUrls: ['./rental-input.component.css']
})
export class RentalInputComponent implements OnInit {

  @ViewChild('form') form;


  model: RentalForm;

  constructor(public rentalListService: RentalListService){}


  ngOnInit() {
    this.model = { car: '', start: '', end: '' }
  }

  onSubmit(){
    if(this.form.valid){
      this.rentalListService.addRental(this.model.car, this.model.start, this.model.end);
    }
  }

}
