/* tslint:disable:no-empty-interface */

import { ActionReducer, combineReducers, compose, Action, ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';

export interface State { }

export const reducers: ActionReducerMap<State> = { };

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
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
