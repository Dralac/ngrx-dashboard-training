import { createSelector } from '@ngrx/store';

// root app state
import { State } from '../reducer';

import * as fromBlog from '../../Blog/store/blog.selectors';

// Public api selectors
export namespace Blog {

    const getState = (state: State) => state.Blog;

    export const getPostsArraySummary = createSelector(
        getState,
        fromBlog.getPostsArraySummary
    );
}
