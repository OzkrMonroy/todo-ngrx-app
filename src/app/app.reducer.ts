import { ActionReducerMap } from '@ngrx/store';
import { filtersTypes } from './store/filter/filter.actions';
import { filtersReducer } from './store/filter/filter.reducer';
import { todoReducer } from './store/todos/todo.reducer';
import { Todo } from './todos/models/todo.model';
export interface AppState {
  todos: Todo[];
  filters: filtersTypes;
}

export const rootReducer: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filters: filtersReducer,
};
