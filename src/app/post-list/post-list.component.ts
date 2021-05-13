import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Posts } from '../models/post.model';
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

}