import { createAction, createSelector, props } from "@ngrx/store";
import { Posts } from "../models/post.model";


export const ADD_POST = '[posts page] add post';

export const addPost = createAction(ADD_POST, props<{post:Posts}>())

export const updatePost = createAction('updatePost', props<{post: Posts}>());
