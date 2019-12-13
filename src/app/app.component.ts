import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'exo-monblog';



 listPost1 = [
  	{
  		title: 'MonPremierPost', 
  		content: 'Vous allez créer une application simple de type blog.  Cette application va afficher les posts du blog, et chaque post aura un bouton permettant de "love it" ou de "dont love it".  Chaque post aura la forme suivante : ', 
  		loveIts: 0,
  		created_at: new Date()
  	},
  	{
  		title: 'MonDeixièmePost', 
  		content: 'Vous allez créer une application simple de type blog.  Cette application va afficher les posts du blog, et chaque post aura un bouton permettant de "love it" ou de "dont love it".  Chaque post aura la forme suivante : ', 
  		loveIts: 0,
  		created_at: new Date()
  	},
  	{
  		title: 'MonTroiièmePost', 
  		content: 'Vous allez créer une application simple de type blog.  Cette application va afficher les posts du blog, et chaque post aura un bouton permettant de "love it" ou de "dont love it".  Chaque post aura la forme suivante : ', 
  		loveIts: 0,
  		created_at: new Date()
  	}

  ];




}
