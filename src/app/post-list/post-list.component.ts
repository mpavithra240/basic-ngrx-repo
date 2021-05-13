import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Posts } from '../models/post.model';
import { deletePost } from '../state/post.actions';
import { getPosts } from '../state/post.selectore';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Observable<Posts[]>
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.posts = this.store.select(getPosts);
  }

  onDelete(id) {
    if(confirm('Are u sure u wanna delete?')) {
      console.log('hi', id)
      // let post:Posts = {
      //   id: id.id,
      //   title: id.title,
      //   description: id.description
      // }
      this.store.dispatch(deletePost({id}));
    }
  }
}