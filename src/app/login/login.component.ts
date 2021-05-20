import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { AuthService } from '../services/auth.service';
import { setLoadingSpinner } from '../sharedComponent/sharedStore/shared.action';
import { loginstart } from '../state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private store: Store<AppState>, private authservice: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }

  onSubmit() {
    console.log(this.loginForm.value);

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    console.log(this.authservice.login(email,password));
    this.store.dispatch(setLoadingSpinner({status: true}));
    this.store.dispatch(loginstart({email,password}))
  }

}