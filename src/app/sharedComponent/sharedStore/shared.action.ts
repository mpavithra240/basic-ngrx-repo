import { createAction, props } from '@ngrx/store';

export const SET_LOADING = 'set loading spinner';
export const SET_ERROR_MESSAGE = 'set error message';

export const setLoadingSpinner = createAction(
  SET_LOADING,
  props<{ status: boolean }>()
);

export const setErrorMEssage = createAction(
  SET_ERROR_MESSAGE,
  props<{ message: string }>()
);
