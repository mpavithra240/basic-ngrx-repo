import { createReducer, on } from '@ngrx/store';
import { addPost, deletePost, loadSucess, updatePost } from './post.actions';
import { initialState } from './post.state';

const _postReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    let post = { ...action.post };
    post.id = (state.post.length + 1).toString();
    return {
      ...state,
      post: [...state.post, post]
    };
  }),
  on(updatePost, (state, action) => {
    console.log(action);
    const updatedPost = state.post.map(post => {
      return action.post.id === post.id ? action.post : post;
    });
    return {
      ...state,
      post: updatedPost
    };
  }),
  on(deletePost, (state, action) => {
    console.log( action.id)
    let dummy = state.post.filter((post) => {return post.id !== action.id})
    return {
      ...state,
       post: dummy
    };
  }),
  on(loadSucess, (state, action) => {
    console.log('hi12');
   return {
     ...state,
     post: action.post
   }
  })
);

export function postsReduceer(state, action) {
  return _postReducer(state, action);
}
