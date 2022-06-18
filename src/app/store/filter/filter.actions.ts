import { createAction, props } from '@ngrx/store';

export type filtersTypes = 'all' | 'completed' | 'active';

export const setFilterAction = createAction(
  'Set Filter',
  props<{ filter: filtersTypes }>()
);
