import { createSelector } from '@ngrx/store'; // reselect
import { State } from './blog.reducer';

const getEntities = (state: State) => state.entities;

const getIds = (state: State) => state.ids;
