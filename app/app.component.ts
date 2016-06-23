import {Component} from '@angular/core';

export class User{
	userId : number ;
	name   : string ;
}
export class Post{
	postId : number;
	user   : User;
	post   : string;

  constructor(public pId,public usr,public pst){
    this.postId = pId;
    this.user = usr;
    this.post = pst;
  }
}

@Component({
    selector: 'my-app',
    template: `

 <div class="ui list">
  <div class="item">
    <img class="ui avatar image" src="/images/avatar2/small/rachel.png">
    <div class="content">
      <a class="header">Rachel</a>
      <div class="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
    </div>
  </div>
  <div class="item">
    <img class="ui avatar image" src="/images/avatar2/small/lindsay.png">
    <div class="content">
      <a class="header">Lindsay</a>
      <div class="description">Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.</div>
    </div>
  </div>
  <div class="item">
    <img class="ui avatar image" src="/images/avatar2/small/matthew.png">
    <div class="content">
      <a class="header">Matthew</a>
      <div class="description">Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.</div>
    </div>
  </div>
  <div class="item">
    <img class="ui avatar image" src="/images/avatar/small/jenny.jpg">
    <div class="content">
      <a class="header">Jenny Hess</a>
      <div class="description">Last seen watching <a><b>Twin Peaks</b></a> 3 days ago.</div>
    </div>
  </div>
  <div class="item">
    <img class="ui avatar image" src="/images/avatar/small/veronika.jpg">
    <div class="content">
      <a class="header">Veronika Ossi</a>
      <div class="description">Has not watched anything recently</div>
    </div>
  </div>
</div>   
    			<h1>{{title}}</h1>    			

    			<h2> Feeds </h2>

          <p>
    			<div class="post">
    				<label> Post from : </label>{{post1.user.name}}
    				<br />
                    <p>{{post1.post}}
    			</div>
          <br />
          <div class="post">
            <label> Post from : </label> {{post2.user.name}}
            <br />
                    <p>{{post2.post}}
          </div>
          <br />


          <div class="post">
            <label> Post from : </label> {{post3.user.name}}
            <br />
                    <p>{{post3.post}}
          </div>    		  
          `
})

export class AppComponent {
       
      title = "Madhumoh";      
      post1 = new User(1,"Hey Guys! Any plans for today?",{ userId : 1, name :"Sagar"});
      post2 = {
              postId   : 2 ,
              post   :"Arre,it's friday, bhai social chalenge",
              user : {
                userId : 2,
                name   : "Umesh"
              }
          };
      post3 = {
              postId   : 3 ,
              post   :"Bhai pina hi ho to mere room pe chalo, free me padega",
              user : {
                userId : 3,
                name   : "Ajay"
              }
          };


}