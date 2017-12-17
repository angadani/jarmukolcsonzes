import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalInputComponent } from './rental-input/rental-input.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    RentalListComponent,
    RentalInputComponent,
    RentalListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
