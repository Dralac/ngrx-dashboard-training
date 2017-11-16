import { Action, combineReducers } from '@ngrx/store';

import { ApiBlogPost, Post, PostComment, User, PostEntities, UserEntities, PostCommentEntities } from './blog.models';
import * as actions from './blog.actions';

export interface State {
    // business domain props
    entities: {
        posts: PostEntities;
        comments: PostCommentEntities;
        users: UserEntities;
    };
    ids: {
        posts: string[];
    };
}

function postsEntities(state: PostEntities = {}, action: actions.Actions): PostEntities {
    switch (action.type) {
        case actions.GET_POSTS_SUCCESS: return normalizeMultiplePosts(action.payload);
        default: return state;
    }
}

function postsIds(state: string[] = [], action: actions.Actions): string[] {
    switch (action.type) {
        case actions.GET_POSTS_SUCCESS: return action.payload.map(post => post.guid);
        default: return state;
    }
}

function usersEntities(state: UserEntities = {}, action: actions.Actions): UserEntities {
    switch (action.type) {
        case actions.GET_POSTS_SUCCESS: return normalizeUserFromPosts(action.payload);
        default: return state;
    }
}

function commentEntities(state: PostCommentEntities = {}, action: actions.Actions): PostCommentEntities {
    switch (action.type) {
        case actions.GET_POSTS_SUCCESS: return normalizeCommentsFromPosts(state, action);
        default: return state;
    }
}

const ids = combineReducers({
    posts: postsIds
});

const entities = combineReducers({
    posts: postsEntities,
    comments: commentEntities,
    users: usersEntities
});


export const reducer = combineReducers({
    entities,
    ids
});





// helper functions

export const normalizeMultiplePosts =
    (apiPosts: ApiBlogPost[]) => apiPosts.reduce((posts, post) => ({
        ...posts,
        [post.guid]: ({
            ...post,
            comments: post.comments.map(comment => comment.guid),
            user: post.user._id
        })
    }), {});


export const normalizeUserFromPosts =
    (apiPosts: ApiBlogPost[]) => apiPosts.reduce((users, post) => {
        const { user } = post;

        return users[user._id]
            ? users
            : { ...users, [user._id]: user };
    }, {});


function normalizeCommentsFromPosts(state: PostCommentEntities, action: actions.GetPostsSuccessAction): PostCommentEntities {
    const posts = action.payload;
    return posts
        .map(post => post.comments)
        .reduce((allComments, comments) =>
            [...allComments, ...comments], []
        )
        .reduce((comments, comment) => ({
            ...comments,
            [comment.guid]: comment
        }), {});
}
