import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "./post.state";

const getPostSate = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostSate, (state) => {
  return state.post
})

export const getPostById = createSelector(getPostSate, (state, props) => {
  // if(sta)
  return state.post.find(post => post.id == props.id);
})