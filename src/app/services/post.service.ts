import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { root } from 'rxjs/internal/util/root';
import { map } from 'rxjs/operators';
import { Posts } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPost(): Observable<Posts> {
    console.log('hi');
    return this.http
      .get<Posts[]>(`https://ngrx-557f6-default-rtdb.firebaseio.com/post.json`)
      .pipe(map(data => {
        const post: Posts[] = [];
        for(let key in data) {
          post.push({...data[key], id: key});
        }
        console.log(post);
        return post;
      })
      );
  }
}
