import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTodoAction } from '../../store/todos/todo.actions';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  textInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.textInput = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]);
  }

  ngOnInit(): void {}

  addTodo() {
    if (this.textInput.valid) {
      this.store.dispatch(addTodoAction({ text: this.textInput.value }));
      this.textInput.reset();
    }
  }
}
