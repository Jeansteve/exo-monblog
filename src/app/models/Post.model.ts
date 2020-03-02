export class Post {

    dontLoveIt: number;
    loveIts: number;
    created_at: Date;

    constructor(public title: string, public content: string) {
        this.created_at = new Date();
        this.dontLoveIt = 0;
        this.loveIts = 0;
    }
}