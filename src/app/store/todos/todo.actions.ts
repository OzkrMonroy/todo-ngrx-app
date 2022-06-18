import { createAction, props } from '@ngrx/store';

export const addTodoAction = createAction(
  '[Add todo]',
  props<{ text: string }>()
);
export const toggleCompletedAction = createAction(
  '[Toggle completed]',
  props<{ id: number }>()
);
export const editAction = createAction(
  'Edit Todo',
  props<{ id: number; text: string }>()
);
