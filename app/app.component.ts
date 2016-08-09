import {Component} from '@angular/core';
import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
import { Post } from './model_components/post.model';
import { POSTS } from './mock-post';

@Component({
    selector: 'my-app',
    directives: [SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES],
    templateUrl: 'app/app.component.html'
})
export class AppComponent {

    posts: Post[] = POSTS ;
}