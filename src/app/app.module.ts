import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { environment } from '../environments/environment';
import { appReducer } from './app.state';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';


@NgModule({
  imports: [BrowserModule,AppRoutingModule,FormsModule, ReactiveFormsModule,
   StoreModule.forRoot(appReducer),
   StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
    }),],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PostListComponent,
    AddPostComponent,
    EditPostComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
