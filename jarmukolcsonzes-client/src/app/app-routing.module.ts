import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalListComponent } from "./rental-list/rental-list.component";
import { RentalInputComponent } from "./rental-input/rental-input.component";
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';



const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'rental-list', component: RentalListComponent},
  { path: 'rental-input', component: RentalInputComponent, canActivate: [AuthGuardService]},
  { path: '**', redirectTo: 'rental-list' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule {}
