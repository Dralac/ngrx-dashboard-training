import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';

import { BlogApiService } from '../api';

import * as actions from './blog.actions';

@Injectable()
export class BlogEffects {

    constructor(
        private blogApi: BlogApiService,
        private actions$: Actions
    ) { }

    @Effect()
    getPosts$ = this.actions$
        .ofType(actions.GET_POSTS_REQUEST)
        // switchMap using so we can cancel if we want to load again
        // go through concatMap, exhaustMap, mergeMap
        .switchMap(_ => this.blogApi.getPosts()
            .map(res => res.data)
            .map(posts => new actions.GetPostsSuccessAction(posts))
            .catch(err => of(new actions.GetPostsFailAction(err)))
        );
}
