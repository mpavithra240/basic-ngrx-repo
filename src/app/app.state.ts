import { SharedReducer } from "./sharedComponent/sharedStore/shared.reducer";
import { SHARED_STATE_NAME } from "./sharedComponent/sharedStore/shared.selector";
import { SharedState } from "./sharedComponent/sharedStore/shared.state";
import { AuthReducer } from "./state/auth.reducer";
import { AUTH_STATE_NAME } from "./state/auth.selector";
import { AuthState } from "./state/auth.state";

export interface AppState {
  SHARED_STATE_NAME: SharedState;
  AUTH_STATE_NAME: AuthState;
}

export const appReducer = {
 [SHARED_STATE_NAME]: SharedReducer,
 [AUTH_STATE_NAME]: AuthReducer
}