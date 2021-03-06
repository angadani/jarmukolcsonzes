import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../user';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: User;
  validationMessage: string;

  @ViewChild('form') form;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.model = {
      username: '',
      password: '',
    };
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.login(this.model)
        .then(() => {
          this.router.navigateByUrl('/issue-list');
        })
        .catch(() => {
          this.validationMessage = 'Nem sikerült bejelentkezni';
        });
    }
  }

}