import { Action, combineReducers } from '@ngrx/store';

import { ApiBlogPost, Post, PostComment, User } from './blog.models';
import * as actions from './blog.actions';

export interface State {
    // business domain props
    entities: { };
    ids: { };
}

const ids = combineReducers({ });

const entities = combineReducers({ });

export const reducer = combineReducers({
    entities,
    ids
});


