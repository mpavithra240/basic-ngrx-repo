import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthResponseData } from '../models/authResponseData.model';
import { User } from '../models/user.model';
import { logout } from '../state/auth.actions';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  timeOutInterval: any;
  constructor(private http: HttpClient, private store: Store) {}

  login(email, password): Observable<AuthResponseData> {
    console.log(email, password);

    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${
        environment.FIRE_BASE_API
      }`,
      { email, password, returnSecureToken: true }
    );
  }

  formatUSer(data: AuthResponseData) {
    const expirationDate = new Date(
      new Date().getTime() + +data.expiresIn * 1000
    );
    const user = new User(
      data.email,
      data.idToken,
      data.localId,
      expirationDate
    );
    return user;
  }

  getErrorMessage(message: string) {
    switch (message) {
      case 'EMAIL_NOT_FOUND':
        return 'Email Not Found';
      case 'INVALID_EMAIL':
        return 'Invalid Email';
      case 'INVALID_PASSWORD':
        return 'Invalid Password';
      case 'EMAIL_EXISTS':
        return 'Email already exists';
      default:
        return 'Unknown Error Occured Please Try again !';
    }
  }

  signup(email, password): Observable<AuthResponseData> {
    console.log(email, password);

    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
        environment.FIRE_BASE_API
      }`,
      { email, password, returnSecureToken: true }
    );
  }

  setUserInLocalStorage(user: User) {
    localStorage.setItem('userData', JSON.stringify(user));
    this.runTimeOut(user);
  }

  runTimeOut(user: User) {
    
    const today = new Date().getTime();
    // const exprDate = user.expireDate.getTime();
    console.log(user)
    // const timeInterval = exprDate - today;

    this.timeOutInterval = setTimeout(() => {
      //logout
      this.store.dispatch(logout());
    }, 300000);
  }
  getUserFromLocalStorgae() {
    const userdatastring = localStorage.getItem('userData');
    console.log(userdatastring);
    if (userdatastring) {
      const userdata = JSON.parse(userdatastring);
      const user = new User(
        userdata.email,
        userdata.token,
        userdata.localId,
        userdata.expirationDate
      );
      // const date = Date.parse(user.expireDate)
      console.log(user.expireDate, typeof user.expireDate);
    //   this.timeOutInterval = setTimeout(() => {
      
    // }, 10000000);
      this.runTimeOut(user);
      return user;
    }
    return null;
  }

  logout() {
    localStorage.removeItem('userData');
    if(this.timeOutInterval) {
      clearTimeout(this.timeOutInterval);
      this.timeOutInterval = null;
    }
  }
}

//email - test@test.com pwd - 123456
