import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/Post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit, OnDestroy {

  // @Input() listPost: Array<any>;
  listPosts: Post[];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.listPosts = posts;
      }, 
      (error) => {
        console.log('Erreur chargement du des posts');
      }, 
      () => {
        console.log('Completed');
      }
    );
    this.postsService.getPosts();
    setTimeout(() => this.postsService.emitPosts(), 1000);

  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
  

}
