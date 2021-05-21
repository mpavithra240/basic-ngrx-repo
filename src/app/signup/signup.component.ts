import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { setLoadingSpinner } from '../sharedComponent/sharedStore/shared.action';
import { signupstart } from '../state/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.signupForm = new FormGroup ({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      // cpassword: new FormControl('', Validators.required),
    })
  }

  submit() {
    console.log(this.signupForm.value);
    const email= this.signupForm.value.email;
    const password= this.signupForm.value.password;
    this.store.dispatch(setLoadingSpinner({status:true}));
    this.store.dispatch(signupstart({email,password}));
  }
}