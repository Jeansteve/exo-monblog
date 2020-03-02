import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import { PostsService } from './services/posts.service';
import { PostFormComponent } from './post-form/post-form.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponentComponent}, 
  { path: 'posts/new', component: PostFormComponent}, 
  { path: '', redirectTo: 'posts', pathMatch: 'full'}, 
  { path: '**', redirectTo: 'posts'}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    PostFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
