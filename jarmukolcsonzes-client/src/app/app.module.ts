import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalInputComponent } from './rental-input/rental-input.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalListService } from './rental-list.service';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    RentalListComponent,
    RentalInputComponent,
    RentalListItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [RentalListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
