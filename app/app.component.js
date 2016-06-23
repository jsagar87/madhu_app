"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var Post = (function () {
    function Post() {
    }
    return Post;
}());
exports.Post = Post;
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Madhumoh";
        this.post1 = {
            postId: 1,
            post: "Hey Guys! Any plans for today?",
            user: {
                userId: 1,
                name: "Sagar"
            }
        };
        this.post2 = {
            postId: 2,
            post: "Arre,it's friday, bhai social chalenge",
            user: {
                userId: 2,
                name: "Umesh"
            }
        };
        this.post3 = {
            postId: 3,
            post: "Bhai pina hi ho to mere room pe chalo, free me padega",
            user: {
                userId: 3,
                name: "Ajay"
            }
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\n <div class=\"ui list\">\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar2/small/rachel.png\">\n    <div class=\"content\">\n      <a class=\"header\">Rachel</a>\n      <div class=\"description\">Last seen watching <a><b>Arrested Development</b></a> just now.</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar2/small/lindsay.png\">\n    <div class=\"content\">\n      <a class=\"header\">Lindsay</a>\n      <div class=\"description\">Last seen watching <a><b>Bob's Burgers</b></a> 10 hours ago.</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar2/small/matthew.png\">\n    <div class=\"content\">\n      <a class=\"header\">Matthew</a>\n      <div class=\"description\">Last seen watching <a><b>The Godfather Part 2</b></a> yesterday.</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/jenny.jpg\">\n    <div class=\"content\">\n      <a class=\"header\">Jenny Hess</a>\n      <div class=\"description\">Last seen watching <a><b>Twin Peaks</b></a> 3 days ago.</div>\n    </div>\n  </div>\n  <div class=\"item\">\n    <img class=\"ui avatar image\" src=\"/images/avatar/small/veronika.jpg\">\n    <div class=\"content\">\n      <a class=\"header\">Veronika Ossi</a>\n      <div class=\"description\">Has not watched anything recently</div>\n    </div>\n  </div>\n</div>   \n    \t\t\t<h1>{{title}}</h1>    \t\t\t\n\n    \t\t\t<h2> Feeds </h2>\n\n          <p>\n    \t\t\t<div class=\"post\">\n    \t\t\t\t<label> Post from : </label>{{post1.user.name}}\n    \t\t\t\t<br />\n                    <p>{{post1.post}}\n    \t\t\t</div>\n          <br />\n          <div class=\"post\">\n            <label> Post from : </label> {{post2.user.name}}\n            <br />\n                    <p>{{post2.post}}\n          </div>\n          <br />\n\n\n          <div class=\"post\">\n            <label> Post from : </label> {{post3.user.name}}\n            <br />\n                    <p>{{post3.post}}\n          </div>    \t\t  \n          "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map