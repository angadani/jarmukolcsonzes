import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rental-list-item',
  templateUrl: './rental-list-item.component.html',
  styleUrls: ['./rental-list-item.component.css']
})
export class RentalListItemComponent implements OnInit {

  @Input() rental: string;

  constructor() { }

  ngOnInit() {
  }

}
