import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { Posts } from '../models/post.model';
import { PostService } from '../services/post.service';
import { loadPost, loadSucess } from './post.actions';

@Injectable()
export class PostEffects {
  constructor(private action$: Actions, private postService: PostService) {}

  loadPost$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(loadPost),
        mergeMap(action => {
          console.log(action);
          return this.postService.getPost().pipe(
            map(post => {
              const posts : any = post
              console.log(post, typeof post);
              return loadSucess({post})
            })
          );
        })
      );
    }
  );
}
