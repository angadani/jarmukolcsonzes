import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalInputComponent } from './rental-input/rental-input.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalListService } from './rental-list.service';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    RentalListComponent,
    RentalInputComponent,
    RentalListItemComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [RentalListService,
    AuthService,
    AuthGuardService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
