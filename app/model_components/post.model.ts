import { User } from './user.model.ts'

export class Post{
	postId : number;
	user   : User;
	post   : string;

  // constructor(public postId,public user,public post){
  //   this.postId = pId;
  //   this.user = usr;
  //   this.post = pst;
  // }
}