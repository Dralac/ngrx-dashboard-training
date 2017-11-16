import { createSelector } from '@ngrx/store'; // reselect
import { State } from './blog.reducer';
import * as models from './blog.models';

const getEntities = (state: State) => state.entities;

const getIds = (state: State) => state.ids;

const getPosts = createSelector(getEntities, entities => entities.posts);

const getUsers = createSelector(getEntities, entities => entities.users);

const getComments = createSelector(getEntities, entities => entities.comments);

const getPostIds = createSelector(getIds, ids => ids.posts);

// getting posts in order
const getPostsArray = createSelector(
    getPostIds,
    getPosts,
    (ids, posts) => ids.map(id => posts[id])
);


// calculate some data
export type PostSummary = Pick<models.Post, 'title' | 'text' | 'guid'> & { fullName: string };

export const getPostsArraySummary = createSelector(
    getPostsArray,
    getUsers,
    (posts, users) => posts.map(post => {
        const user = users[post.user];
        const fullName = user.first_name + ' ' + user.last_name;
        const { title, text, guid } = post;

        return { title, text, guid, fullName } as PostSummary;
    })
);









// if we need to use a denormalized version
export const getPostsDenormalized = createSelector(
    getPostsArray,
    getComments,
    getUsers,
    (posts, comments, users) =>
        posts.map(post => ({
            ...post,
            comments: post.comments.map(comment => comments[comment]),
            user: users[post.user]
        }))
);












// curried function example
export const singlePostComments = (posts: models.PostEntities, comments: models.PostCommentEntities) =>
    (postId: string) => posts[postId]
        ? posts[postId].comments.map(comment => comments[comment])
        : [];

export const getSinglePostComments = createSelector(
    getPosts,
    getComments,
    singlePostComments
);
