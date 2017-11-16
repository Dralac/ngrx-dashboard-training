import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as actions from '../store/blog.actions';
import * as models from '../store/blog.models';

import { State } from '../../Store';

@Injectable()
export class BlogService {

    constructor(private store: Store<State>) { }

    loadPosts() {
        this.store.dispatch(new actions.GetPostsRequestAction());
    }
}
