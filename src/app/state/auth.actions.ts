import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const LOGIN_START = 'login start';
export const LOGIN_SUCESS = 'login sucess';
export const LOGIN_END = 'login end';

export const loginstart = createAction(
  LOGIN_START,
  props<{ email: string; password: string }>()
);

export const loginSucess = createAction(LOGIN_SUCESS, props<{ user: User }>());
