import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';

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

  constructor() {}

  ngOnInit(): void {
    this.completedCheck = new FormControl(this.todo.completed);
    this.editInput = new FormControl(this.todo.text, [
      Validators.required,
      Validators.minLength(4),
    ]);
  }

  setEditing(): void {
    this.editing = true;
    setTimeout(() => {
      this.editInputEl.nativeElement.select();
    }, 1);
  }
  unsetEditing(): void {
    this.editing = false;
  }
}
