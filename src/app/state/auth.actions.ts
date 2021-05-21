import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const LOGIN_START = 'login start';
export const LOGIN_SUCESS = 'login sucess';
export const LOGIN_END = 'login end';
export const SIGNUP_SUCESS = 'signup sucess';
export const SIGNUP_START = 'signup start';

export const loginstart = createAction(
  LOGIN_START,
  props<{ email: string; password: string }>()
);

export const loginSucess = createAction(LOGIN_SUCESS, props<{ user: User }>());

export const signupstart = createAction(
  SIGNUP_START,
  props<{ email: string; password: string }>()
);

export const signupsucess = createAction(
  SIGNUP_SUCESS,
  props<{ user: User }>()
);
