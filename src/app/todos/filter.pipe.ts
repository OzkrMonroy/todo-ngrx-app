import { Pipe, PipeTransform } from '@angular/core';
import { filtersTypes } from '../store/filter/filter.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'todoFilter',
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filter: filtersTypes): Todo[] {
    return [...todos].filter((todo) => {
      if (filter === 'active') {
        return !todo.completed;
      }
      if (filter === 'completed') {
        return todo.completed;
      }

      return todo;
    });
  }
}
