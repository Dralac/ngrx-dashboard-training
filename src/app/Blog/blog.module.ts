import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../shared';

import { BlogApiService } from './api';

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
export class BlogModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: BlogModule,
            providers: [BlogApiService]
        };
    }
}
