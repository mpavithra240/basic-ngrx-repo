import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponseData } from '../models/authResponseData.model';
import { User } from '../models/user.model';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

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
        return 'Email already exists'
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
}

//email - test@test.com pwd - 123456
