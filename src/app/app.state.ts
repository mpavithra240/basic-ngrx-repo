import { counterReducer } from "./state/counter.reducer";
import { CounterState } from "./state/counter.state";
import { postsReduceer } from "./state/post.reducer";
import { PostsState } from "./state/post.state";

export interface AppState {
  counter: CounterState;
  posts: PostsState;
}

export const appReducer = {
  counter: counterReducer,
  posts: postsReduceer
}