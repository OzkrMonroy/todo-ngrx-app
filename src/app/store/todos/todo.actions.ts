import { createAction, props } from '@ngrx/store';

export const addTodoAction = createAction(
  '[Add todo',
  props<{ text: string }>()
);