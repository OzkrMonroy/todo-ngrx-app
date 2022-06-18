import { Action, createReducer, on } from '@ngrx/store';
import { filtersTypes, setFilterAction } from './filter.actions';

export const initialState: filtersTypes = 'all';

export const filtersReducer = createReducer<filtersTypes, Action>(
  initialState,
  on(setFilterAction, (state: filtersTypes, { filter }) => filter)
);
