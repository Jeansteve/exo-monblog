import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  nbrLovIt: number = 0;
  nbrDontLoveIt: number = 0;

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() { }

  ngOnInit() {
  }

  addLovIt() {
  	this.nbrLovIt = this.nbrLovIt + 1;
  }

  addDontLovIt() {
  	this.nbrDontLoveIt = this.nbrDontLoveIt + 1;
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
