import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddPostComponent } from "./add-post/add-post.component";
import { CounterComponent } from "./counter/counter.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { HomeComponent } from "./home/home.component";
import { PostListComponent } from "./post-list/post-list.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "counter", component: CounterComponent},
  {path: "posts", component: PostListComponent,
  children: [
    {path: 'add', component: AddPostComponent},
    {path: 'edit/:id', component: EditPostComponent},
  ]
  
  },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule {


}