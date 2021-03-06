import { createReducer, on } from '@ngrx/store';
import { loginSucess, logout, signupsucess } from './auth.actions';
import { initialState } from './auth.state';

export const _authReducer = createReducer(
  initialState,
  on(loginSucess, (state, action) => {
    return {
      ...state,
      user: action.user
    };
  }),
  on(signupsucess, (state, action) => {
    return {
      ...state,
      user: action.user
    };
  }),
  on(logout, state => {
    return{
      ...state,
      user: null
    }
  })
);

export function AuthReducer(state, action) {
  return _authReducer(state, action);
}
