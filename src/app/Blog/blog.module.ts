import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { BlogListComponent, BlogPostComponent } from './components';

@NgModule({
    imports: [
        SharedModule.forChild()
    ],
    declarations: [
        // containers

        // components
        BlogListComponent,
        BlogPostComponent
    ],
    exports: [],
    providers: []
})
export class BlogModule { }
