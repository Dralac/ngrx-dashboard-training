import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { BlogService } from '../../services';

@Component({
    selector: 'lum-blog-page',
    templateUrl: 'blog-page.component.html',
    styleUrls: ['./blog-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogPageComponent implements OnInit {

    constructor(private blogService: BlogService) { }

    ngOnInit() {
        this.blogService.loadPosts();
    }
}
