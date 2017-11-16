import { NgModule, ModuleWithProviders } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared';

import { BlogApiService } from './api';

import { BlogService } from './services';

import { BlogEffects } from './store';

import { BlogPageComponent } from './containers';

import { BlogListComponent, BlogPostComponent } from './components';

@NgModule({
    imports: [
        SharedModule.forChild(),
        EffectsModule.forFeature([BlogEffects])
    ],
    declarations: [
        // containers
        BlogPageComponent,

        // components
        BlogListComponent,
        BlogPostComponent
    ],
    exports: [
        BlogPageComponent
    ]
})
export class BlogModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: BlogModule,
            providers: [BlogApiService, BlogService]
        };
    }
}
