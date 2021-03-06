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
export const deleteTodoAction = createAction(
  'Delete todo',
  props<{ id: number }>()
);
export const toggleCompletedAllAction = createAction('Toggle Completed All');
export const deleteAllCompletedTodos = createAction(
  'Delete All Completed TODOs'
);
