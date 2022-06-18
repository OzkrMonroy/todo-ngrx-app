import { createReducer, on } from '@ngrx/store';
import {
  addTodoAction,
  deleteTodoAction,
  editAction,
  toggleCompletedAction,
  toggleCompletedAllAction,
} from './todo.actions';
import { Todo } from '../../todos/models/todo.model';

export const initialState: Todo[] = [new Todo('Save the world!')];

export const todoReducer = createReducer(
  initialState,
  on(addTodoAction, (state, { text }) => [...state, new Todo(text)]),
  on(toggleCompletedAction, (state, { id }) =>
    state.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  ),
  on(editAction, (state, { id, text }) =>
    state.map((todo) => (todo.id === id ? { ...todo, text } : todo))
  ),
  on(deleteTodoAction, (state, { id }) =>
    state.filter((todo) => todo.id !== id)
  ),
  on(toggleCompletedAllAction, (state) =>
    state.map((todo) => ({ ...todo, completed: !todo.completed }))
  )
);
