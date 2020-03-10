import { PostType } from "./PostType";

export class Post {
   
    private content: string;

    private postType: string;
    private userId: string;

    constructor(content: string, postType: string, userId: string) {
        this.content = content;
        this.postType = postType;
        this.userId = userId;
    }


}
