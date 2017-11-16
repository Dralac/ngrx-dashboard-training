import { NgModule, ModuleWithProviders } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared';

import { BlogEffects } from './store';

import { BlogApiService } from './api';

import { BlogListComponent, BlogPostComponent } from './components';

@NgModule({
    imports: [
        SharedModule.forChild(),
        EffectsModule.forFeature([BlogEffects])
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
