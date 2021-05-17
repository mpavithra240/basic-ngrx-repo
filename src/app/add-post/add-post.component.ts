import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Posts } from '../models/post.model';
import { addPost } from '../state/post.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postForm: FormGroup;


  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(10)]),
    })
  }

  onAddPost() {
    
    if(!this.postForm.valid){
      return;
    }
    const post: Posts = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    }
    this.store.dispatch(addPost({post}))
    this.router.navigate(['posts'])
    console.log(this.postForm.value);
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
}