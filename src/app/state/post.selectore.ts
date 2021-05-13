import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "./post.state";

const getPostSate = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostSate, (state) => {
  return state.post
})