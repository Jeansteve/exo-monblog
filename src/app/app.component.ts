import { Component, Input } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'exo-monblog';



//  listPost1 = [
//   	{
//   		title: 'Mon Premier Post', 
//   		content: 'Vous allez créer une application simple de type blog.  Cette application va afficher les posts du blog, et chaque post aura un bouton permettant de "love it" ou de "dont love it".  Chaque post aura la forme suivante : ', 
//   		loveIts: 0,
//   		created_at: new Date()
//   	},
//   	{
//   		title: 'Mon Deuxième Post', 
//   		content: 'Vous allez créer une application simple de type blog.  Cette application va afficher les posts du blog, et chaque post aura un bouton permettant de "love it" ou de "dont love it".  Chaque post aura la forme suivante : ', 
//   		loveIts: 0,
//   		created_at: new Date()
//   	},
//   	{
//   		title: 'Mon Troisième Post', 
//   		content: 'Vous allez créer une application simple de type blog.  Cette application va afficher les posts du blog, et chaque post aura un bouton permettant de "love it" ou de "dont love it".  Chaque post aura la forme suivante : ', 
//   		loveIts: 0,
//   		created_at: new Date()
//   	}

//   ];


	constructor() {
		var firebaseConfig = {
			apiKey: "AIzaSyCyhFOqDno0dHT9VcoLpB_JcBWusjz3K7I",
			authDomain: "mon-blog-808a4.firebaseapp.com",
			databaseURL: "https://mon-blog-808a4.firebaseio.com",
			projectId: "mon-blog-808a4",
			storageBucket: "mon-blog-808a4.appspot.com",
			messagingSenderId: "358758322564",
			appId: "1:358758322564:web:5ad21442310484a462cdd1"
		  };
		  // Initialize Firebase
		  firebase.initializeApp(firebaseConfig);
	}

}
