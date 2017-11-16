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


// Summary implementation

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

