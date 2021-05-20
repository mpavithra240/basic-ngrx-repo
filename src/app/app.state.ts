import { SharedReducer } from "./sharedComponent/sharedStore/shared.reducer";
import { SHARED_STATE_NAME } from "./sharedComponent/sharedStore/shared.selector";
import { SharedState } from "./sharedComponent/sharedStore/shared.state";

export interface AppState {
  SHARED_STATE_NAME: SharedState;
}

export const appReducer = {
 [SHARED_STATE_NAME]: SharedReducer
}