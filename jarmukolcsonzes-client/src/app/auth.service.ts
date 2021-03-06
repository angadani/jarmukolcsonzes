import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../user';

@Injectable()
export class AuthService {

  user: User;
  isLoggedIn: boolean;

  constructor(
    private http: Http
  ) { }

  public login(user: User): Promise<User> {
    const response$: Observable<any> = this.http.post('/api/user/login', user);
    const responsePromise: Promise<any> = response$.toPromise();
    return responsePromise
      .then(res => res.json())
      .then(loggedInUser => {
        this.user = loggedInUser;
        this.isLoggedIn = true;
        return loggedInUser;
      });
  }

  public logout() {
    this.user = null;
    this.isLoggedIn = false;
    return this.http.get('/api/user/logout');

  }



}