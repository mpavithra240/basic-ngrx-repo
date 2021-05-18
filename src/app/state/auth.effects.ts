import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { loginstart, loginSucess } from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private action$: Actions, private authService: AuthService) {
    
    console.log(this.action$);
    const login$ = createEffect(() => {
      return this.action$.pipe(
        ofType(loginstart),
        exhaustMap(action => {
          console.log(action);
          return this.authService.login(action.email, action.password).pipe(
            map(data => {
              console.log(data);
              return loginSucess();
            })
          );
        })
      );
    });
  }
}
