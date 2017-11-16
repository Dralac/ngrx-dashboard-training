import { Injectable } from '@angular/core';

import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

import { POSTS } from './posts.data';

function convertToApiPayload<T>(data: T) {
    return {
        data,
        status: 200,
        metadata: {}
    };
}

@Injectable()
export class BlogApiService {

    // constructor(private http: HttpClient) { }

    getPosts() {
        // this.http.get('blog-posts-url');
        return of(POSTS as any[]).delay(2000).map(convertToApiPayload);
    }

    addComment(commentId: string, message: string) {
        return of({} as {}).delay(3000).map(convertToApiPayload);
    }
}
