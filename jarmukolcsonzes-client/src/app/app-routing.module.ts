import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalListComponent } from "./rental-list/rental-list.component";
import { RentalInputComponent } from "./rental-input/rental-input.component";


const routes: Routes = [
  { path: 'rental-list', component: RentalListComponent},
  { path: 'rental-input', component: RentalInputComponent},
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
export class AppRoutingModule { }
