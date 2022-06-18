import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { filtersTypes } from '../../store/filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todoList: Todo[] = [];
  filter!: filtersTypes;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe({
      next: ({ todos, filters }) => {
        this.todoList = todos;
        this.filter = filters;
      },
    });
  }
}
