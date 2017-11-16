import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'lum-blog-post',
    templateUrl: 'blog-post.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogPostComponent {
    @Input() post: any;
}
