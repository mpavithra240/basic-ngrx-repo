import { createReducer, on } from '@ngrx/store';
import { setErrorMEssage } from '../../sharedComponent/sharedStore/shared.action';
import { setLoadingSpinner } from '../../sharedComponent/sharedStore/shared.action';
import { initialState } from '../../sharedComponent/sharedStore/shared.state';

const _sharedReducer = createReducer(
  initialState,
  on(setLoadingSpinner, (state, action) => {
    return {
      ...state,
      showLoading: action.status,
    };
  }),
  on(setErrorMEssage, (state, action)=> {
    return {
      ...state,
      errorMessage: action.message,
    }
  })
);
export function SharedReducer(state, action) {
  return _sharedReducer(state, action);
}

