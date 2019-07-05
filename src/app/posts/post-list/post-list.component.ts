import { Component, Input } from '@angular/core';

import { Post } from '../post.model';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})

export class PostlistComponent {
    // posts = [
    //     {title: 'first post', content: 'this is the first'},
    //     {title: 'first second', content: 'this is the second'},
    //     {title: 'first third', content: 'this is the third'}
    // ]
    @Input() posts: Post[] = [];
}