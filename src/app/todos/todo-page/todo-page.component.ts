import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { toggleCompletedAllAction } from '../../store/todos/todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  toggleCompletedAll(): void {
    this.store.dispatch(toggleCompletedAllAction());
  }
}
