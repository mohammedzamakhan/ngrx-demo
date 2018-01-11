import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddTodo, DeleteTodo, EditTodo, LoadTodos } from '../../actions/todo.actions';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoContainerComponent implements OnInit {
  todos;

  constructor(private store: Store<any>) {
    this.store.select('todos').subscribe(todoStore => {
      this.todos = todoStore.data;
    });
  }

  ngOnInit() {
  }

  addTodo(input) {
    const { value } = input;
    if (value) {
      this.store.dispatch(new AddTodo(value));
      input.value = '';
    }
  }

  handleDelete($event) {
    this.store.dispatch(new DeleteTodo($event));
  }

  handleToggle({completed, todo}) {
    this.store.dispatch(new EditTodo({
      todo,
      changes: {
        completed
      }
    }));

  }
}
