import { createReducer, on } from "@ngrx/store";
import { addPost } from "./post.actions";
import { initialState } from "./post.state";

const _postReducer = createReducer(initialState, 
on(addPost, (state,action) => {
  let post = {...action.post};
  post.id = (state.post.length + 1).toString();
  return {
    ...state, 
    post: [...state.post, post]
  }
}))

export function postsReduceer(state, action) {
  return _postReducer(state, action);
}