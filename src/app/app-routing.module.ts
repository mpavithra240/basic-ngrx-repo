import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {
    path: 'counter', 
    loadChildren: () =>import('./counter.module')
      .then(m => m.CounterModule)},
  {path: "posts", loadChildren: () => import('./post.module')
  .then(m => m.PostModule)
  //  component: PostListComponent,
  // children: [
  //   {path: 'add', component: AddPostComponent},
  //   {path: 'edit/:id', component: EditPostComponent},
  // ]
  
  },
  {path: 'auth',
    loadChildren: ()=> import('./auth.module')
    .then(m => m.AuthModule)
  }
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