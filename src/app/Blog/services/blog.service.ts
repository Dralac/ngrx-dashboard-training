import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as actions from '../store/blog.actions';
import * as models from '../store/blog.models';
import { PostSummary } from '../store/blog.selectors';

import { State } from '../../Store';
import { Blog } from '../../Store/selectors';

@Injectable()
export class BlogService {
    posts$: Observable<PostSummary[]>;

    constructor(private store: Store<State>) {
        this.posts$ = store.select(Blog.getPostsArraySummary);
     }

    loadPosts() {
        this.store.dispatch(new actions.GetPostsRequestAction());
    }
}
