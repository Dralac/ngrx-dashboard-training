/* tslint:disable:no-empty-interface */

import { ActionReducer, combineReducers, compose, Action, ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { logger } from './shared';

import * as fromBlog from '../Blog/store';

export interface State {
    Blog: fromBlog.State;
}

export const reducers: ActionReducerMap<State> = {
    Blog: fromBlog.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];


/**
 *
 * On dashboard currently
 */

// const developmentReducer: ActionReducer<State> = compose(
//   logger,
//   combineReducers
// )(reducers);

// const productionReducer: ActionReducer<State> = compose(
//   combineReducers
// )(reducers);

// export function reducer(state: any, action: any) {
//   if (LUM_ENV === 'production') {
//     return productionReducer(state, action);
//   } else {
//     return developmentReducer(state, action);
//   }
// }
