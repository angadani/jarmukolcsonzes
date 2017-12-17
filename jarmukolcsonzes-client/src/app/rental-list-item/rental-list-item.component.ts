import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Rental } from "../../rental";


@Component({
  selector: 'rental-list-item',
  templateUrl: './rental-list-item.component.html',
  styleUrls: ['./rental-list-item.component.css']
})
export class RentalListItemComponent implements OnInit {

  @Input() rental: Rental;

  @Output() delete: EventEmitter<Rental> = new EventEmitter<Rental>();

  constructor() { }

  ngOnInit() {
  }

deleteMe() {
if (!this.rental.isDone) {
        this.rental.isDone = true;
} else {
        this.delete.emit(this.rental);
      }
}

}
