import { Component,  OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from './posts.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})

export class PostlistComponent implements OnInit, OnDestroy {
    // posts = [
    //     {title: 'first post', content: 'this is the first'},
    //     {title: 'first second', content: 'this is the second'},
    //     {title: 'first third', content: 'this is the third'}
    // ]
    posts: Post[] = [];
    private postsSub: Subscription;
  

    constructor(public postsService: PostsService) {}

    ngOnInit() {
       this.posts = this.postsService.getPosts(); 
       this.postsSub = this.postsService.getPostUpdatedListener()
        .subscribe((posts: Post[]) => {
            this.posts = posts;
        });
    }

    ngOnDestroy() {
        this.postsSub.unsubscribe();
    }
}