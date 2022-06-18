import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  filtersTypes,
  setFilterAction,
} from '../../store/filter/filter.actions';
import { AppState } from '../../app.reducer';
import { deleteAllCompletedTodos } from '../../store/todos/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  currentFilter!: filtersTypes;
  filters: filtersTypes[] = ['all', 'active', 'completed'];
  pendingItems!: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe({
      next: ({ filters, todos }) => {
        this.currentFilter = filters;
        this.pendingItems = todos.filter((todo) => !todo.completed).length;
      },
    });
  }

  setFilter(filter: filtersTypes): void {
    this.store.dispatch(setFilterAction({ filter }));
  }

  getIsOptionSelected(option: filtersTypes) {
    return this.currentFilter === option;
  }

  deleteAllCompleted(): void {
    this.store.dispatch(deleteAllCompletedTodos());
  }
}
