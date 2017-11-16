import { Action, combineReducers } from '@ngrx/store';

import { ApiBlogPost, Post, PostComment, User } from './blog.models';
import * as actions from './blog.actions';

export interface State {
    // business domain props
    loading: boolean;
    loaded: boolean;
    entities: { };
    ids: { };
}

function loaded(state: boolean = false, action: actions.Actions): boolean {
    switch (action.type) {
        case actions.GET_POSTS_REQUEST: return false;
        case actions.GET_POSTS_SUCCESS: return true;
        default: return state;
    }
}

function loading(state: boolean = false, action: actions.Actions): boolean {
    switch (action.type) {
        case actions.GET_POSTS_REQUEST:
            return true;

        case actions.GET_POSTS_SUCCESS:
        case actions.GET_POSTS_FAIL:
            return false;

        default: return state;
    }
}

const ids = combineReducers({ });

const entities = combineReducers({ });

export const reducer = combineReducers({
    loading,
    loaded,
    entities,
    ids
});


