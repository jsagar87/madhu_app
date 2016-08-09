// mock-post.ts

import { Post } from './model_components/post.model';



export const POSTS : Post[] = [
		         {
                postId   : 1 ,
                post   :"Whats up",
                user : {
                  userId : 1,
                  name   : "Sagar"
                }
             },
             {
              postId   : 2 ,
              post   :"How to create event",
              user : {
                userId : 1,
                name   : "Ajay"
              }
            }, {
              postId   : 3 ,
              post   :"How to create event",
              user : {
                userId : 1,
                name   : "Ajay"
              }
            },          
];