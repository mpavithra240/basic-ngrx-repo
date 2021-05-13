import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { HomeComponent } from "./home/home.component";
import { PostListComponent } from "./post-list/post-list.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {
    path: 'counter', 
    loadChildren: () =>import('./counter.module')
      .then(m => m.CounterModule)},
  {path: "posts", component: PostListComponent,
  children: [
    {path: 'add', component: AddPostComponent},
    {path: 'edit/:id', component: EditPostComponent},
  ]
  
  },
];
@NgModule({
  declarations: [],
    imports: [CommonModule,
    FormsModule  , 
    RouterModule,
    ReactiveFormsModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule {


}