import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { BlogListComponent, BlogPostComponent, BlogCommentComponent } from './components';

@NgModule({
    imports: [
        SharedModule.forChild()
    ],
    declarations: [
        // containers

        // components
        BlogListComponent,
        BlogPostComponent,
        BlogCommentComponent
    ],
    exports: [],
    providers: []
})
export class BlogModule { }
