import { Action } from '@ngrx/store';

import { ApiBlogPost } from './blog.models';

export const GET_POSTS_REQUEST = '[Blog] Request GetPosts';

export class GetPostsRequestAction implements Action {
  readonly type = GET_POSTS_REQUEST;
}


export const GET_POSTS_SUCCESS = '[Blog] Success GetPosts';

export class GetPostsSuccessAction implements Action {
    readonly type = GET_POSTS_SUCCESS;

    constructor(public payload: ApiBlogPost[]) { }
}


export const GET_POSTS_FAIL = '[Blog] Fail GetPosts';

export class GetPostsFailAction implements Action {
    readonly type = GET_POSTS_FAIL;

    // for errog logging
    constructor(public payload: any) { }
}

// type safety
export type Actions
    = GetPostsRequestAction
    | GetPostsSuccessAction
    | GetPostsFailAction;
