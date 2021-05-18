import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email, password) {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[AIzaSyDMe0Qauiz-mv4FiAzZRawk7Q7RRaUrjps]`,
    {email,password, returnSecureToken: true})

}