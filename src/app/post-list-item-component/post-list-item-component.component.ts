import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/Post.model';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  nbrLovIt: number = 0;
  nbrDontLoveIt: number = 0;

  // @Input() title: string;
  // @Input() content: string;
  // @Input() loveIts: number;
  // @Input() created_at: Date;

  @Input() post: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit() {

  }

  addLoveIt() {
    this.post.loveIts = this.post.loveIts + 1;
    this.postsService.addLoveIt(this.post);
  }

  addDontLoveIt() {
    this.post.dontLoveIt = this.post.dontLoveIt + 1;
    this.postsService.emitPosts();
    this.postsService.addLoveIt(this.post);
  }

  removePost() {
    this.postsService.removePost(this.post);
  }

  // getDivColor() {
  // 	if (this.nbrLovIt > this.nbrDontLoveIt) 
  // 	{
  // 		return  '#E2EFDB';
  // 	}
  // 	else if (this.nbrLovIt < this.nbrDontLoveIt) 
  // 	{
  // 		return '#EFDFDF';
  // 	}
  // 	else 
  // 	{
  // 		return '';
  // 	}
  // }

  // getContentColor() {
  // 	if (this.nbrLovIt > this.nbrDontLoveIt) 
  // 	{
  // 		return {
  // 			'color': '#688C61'
  // 		};
  // 	}
  // 	else if (this.nbrLovIt < this.nbrDontLoveIt) 
  // 	{
  // 		return {
  // 			'color': '#A8464B'
  // 		};
  // 	}
  // 	else 
  // 	{
  // 		return '';
  // 	}
  // }
}
