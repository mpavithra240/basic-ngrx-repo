import { createAction, props } from "@ngrx/store";
import { Posts } from "../models/post.model";


export const ADD_POST = '[posts page] add post';

export const addPost = createAction(ADD_POST, props<{post:Posts}>())