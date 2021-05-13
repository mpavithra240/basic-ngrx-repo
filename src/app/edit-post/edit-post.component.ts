import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../app.state';
import { Posts } from '../models/post.model';
import { updatePost } from '../state/post.actions';
import { getPostById } from '../state/post.selectore';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  postForm : FormGroup;
  post: Posts;
  postSubs : Subscription
  constructor(private route: ActivatedRoute, private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.postSubs = this.route.paramMap.subscribe( data => {
      // console.log(data.get('id'))
      const id = data.get('id');
      this.store.select(getPostById, {id}).subscribe(data => {
        console.log(data);
        this.post = data;
        this.createForm()
      })
    })
  }

  onUpdatePost() {
    console.log(this.postForm.value);
    const title = this.postForm.value.title;
    const description = this.postForm.value.description;
    let post:Posts = {
      id: this.post.id,
      title: title,
      description: description
    }

    this.store.dispatch(updatePost({post}));
    this.router.navigate(['posts'])

  }


  createForm() {
    this.postForm = new FormGroup( {
      title: new FormControl(this.post.title, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(this.post.description, [Validators.required, Validators.minLength(10)]),
    
    });
  }

  showDescError() {
    let description = this.postForm.get('description');
    //  console.log(description.errors)
    if(description.touched && !description.valid) {
      if(description.errors.required) {
        return 'Desc is required'
      }

      if(description.errors.minlength) {
        return 'Desc shud have 10 char'
      }
    }
  }

  ngOnDestory() {
    if(this.postSubs) {
      this.postSubs.unsubscribe();
    }
   
  }
}