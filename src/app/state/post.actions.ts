import { createAction, createSelector, props } from '@ngrx/store';
import { Posts } from '../models/post.model';

export const ADD_POST = '[posts page] add post';
export const LOAD_POST = 'load post';
export const LOAD_POST_SUCESS = 'load success';

export const addPost = createAction(ADD_POST, props<{ post: Posts }>());

export const updatePost = createAction('updatePost', props<{ post: Posts }>());

// export const deletePost = createAction('deletePost', props<{ post: Posts }>());
export const deletePost = createAction('deletePost', props<{ id: string }>());

export const loadPost = createAction(LOAD_POST);

export const loadSucess = createAction(

  LOAD_POST_SUCESS,
  props<{ post: Posts }>()
  // console.log('c')
);
