import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import { AppState } from '../app.state';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import {
  setLoadingSpinner,
  setErrorMEssage
} from '../sharedComponent/sharedStore/shared.action';
import {
  autoLogin,
  loginstart,
  loginSucess,
  logout,
  signupstart,
  signupsucess
} from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  login$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loginstart),
      exhaustMap(action => {
        console.log(action);

        return this.authService.login(action.email, action.password).pipe(
          map(data => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this.store.dispatch(setErrorMEssage({ message: '' }));
            const user: User = this.authService.formatUSer(data);
            console.log(user);
            this.authService.setUserInLocalStorage(user);
            return loginSucess({ user, redirect: true });
          }),
          catchError(err => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const errorMessage = this.authService.getErrorMessage(
              err.error.error.message
            );
            console.log(errorMessage);

            return of(setErrorMEssage({ message: errorMessage }));
          })
        );
      })
    );
  });

  loginRedirect$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(...[loginSucess, signupsucess]),
        tap(action => {
          if (action.redirect) {
            this.router.navigate(['/']);
          }
        })
      );
    },
    { dispatch: false }
  );

  signup$ = createEffect(() => {
    return this.action$.pipe(
      ofType(signupstart),
      exhaustMap(action => {
        return this.authService.signup(action.email, action.password).pipe(
          map(data => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this.store.dispatch(setErrorMEssage({ message: '' }));
            const user: User = this.authService.formatUSer(data);
            this.authService.setUserInLocalStorage(user);
            return signupsucess({ user, redirect: true });
          }),
          catchError(err => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            console.log(err.error.error.message);
            const errmsg = this.authService.getErrorMessage(
              err.error.error.message
            );
            return of(setErrorMEssage({ message: err.error.error.message }));
          })
        );
      })
    );
  });

  autoLogin$ = createEffect(() => {
    return this.action$.pipe(
      ofType(autoLogin),
      mergeMap(action => {
        const user = this.authService.getUserFromLocalStorgae();
        console.log(user);
        return of(loginSucess({ user, redirect: false }));
      })
    );
  });

  logout$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(logout),
        map(action => {
          this.authService.logout();
          this.router.navigate(['auth']);
        })
      );
    },
    { dispatch: false }
  );

  // signupRedirect$ = createEffect(
  //   () => {
  //     return this.action$.pipe(
  //       ofType(signupsucess),
  //       tap(action => {
  //         this.router.navigate(['/']);
  //       })
  //     );
  //   },
  //   { dispatch: false }
  // );
}
