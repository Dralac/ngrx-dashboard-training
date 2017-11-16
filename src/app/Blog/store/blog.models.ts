export interface ApiBlogPost {
    guid: string;
    title: string;
    text: string;
    comments: PostComment[];
    user: User;
}

// normalized representation of api blog post
export interface Post {
    guid: string;
    title: string;
    text: string;
    comments: string[];
    user: string;
}

export interface User {
    _id: string;
    first_name: string;
    last_name: string;
}

export interface PostComment {
    guid: string;
    text: string;
    upvotes: number;
    downvotes: number;
    date: string;
}

// Normalized

export type PostEntities = { [postId: string]: Post };
export type UserEntities = { [userId: string]: User };
export type PostCommentEntities = { [commentId: string]: PostComment };
