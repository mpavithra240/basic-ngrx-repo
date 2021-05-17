import { P } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { postsReduceer } from './state/post.reducer';

const routes: Routes = [
  {path: '', component: PostListComponent,
  children: [
    {path: 'add', component: AddPostComponent},
    {path: 'edit/:id', component: EditPostComponent},
  ]}
];

@NgModule({
  declarations: [
    PostListComponent,
    AddPostComponent,
    EditPostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormsModule  , 
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('posts', postsReduceer)
  ],
  exports: []
})

export class PostModule {}