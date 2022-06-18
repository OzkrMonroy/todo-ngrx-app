import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  deleteTodoAction,
  toggleCompletedAction,
} from 'src/app/store/todos/todo.actions';
import { AppState } from '../../app.reducer';
import { editAction } from '../../store/todos/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('editInputEl') editInputEl!: ElementRef;

  completedCheck!: FormControl;
  editInput!: FormControl;
  editing: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.completedCheck = new FormControl(this.todo.completed);
    this.editInput = new FormControl(this.todo.text, [
      Validators.required,
      Validators.minLength(4),
    ]);

    this.completedCheck.valueChanges.subscribe({
      next: (value) => {
        this.store.dispatch(toggleCompletedAction({ id: this.todo.id }));
      },
    });
  }

  setEditing(): void {
    this.editing = true;
    this.editInput.setValue(this.todo.text);
    setTimeout(() => {
      this.editInputEl.nativeElement.select();
    }, 1);
  }

  unsetEditing(): void {
    this.editing = false;
  }

  editTodo(): void {
    if (this.editInput.valid) {
      this.store.dispatch(
        editAction({
          id: this.todo.id,
          text: this.editInput.value,
        })
      );
      this.unsetEditing();
    }
  }

  deleteTodo(): void {
    this.store.dispatch(deleteTodoAction({ id: this.todo.id }));
  }
}
