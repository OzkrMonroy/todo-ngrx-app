import { createReducer, on } from '@ngrx/store';
import { addTodoAction } from './todo.actions';
import { Todo } from '../../todos/models/todo.model';

export const initialState: Todo[] = [new Todo('Save the world!')];

export const todoReducer = createReducer(
  initialState,
  on(addTodoAction, (state, { text }) => [...state, new Todo(text)])
);