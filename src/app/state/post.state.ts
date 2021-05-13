import { Posts } from "../models/post.model";

export interface PostsState {
  post: Posts[];
}

export const initialState: PostsState = {
  post: [
    {
      id: '1', title: 'Abc', description: 'desc1'
    },
    {
      id: '2', title: 'AWbc', description: 'dwesc2'
    }
  ]
}