import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TodoService } from './../../todo.service';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoContainerComponent implements OnInit {
  todos;
  constructor(private _todoService: TodoService) {
    this.getTodos();
  }

  getTodos() {
    this._todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  ngOnInit() {
  }

  addTodo(input) {
    const { value } = input;
    if (value) {
      this._todoService.addTodo(value);
      input.value = '';
    }
  }

  handleDelete($event) {
    this._todoService.deleteTodo($event);
  }

  handleToggle({completed, todo}) {
    this._todoService.toggleCompleted(completed, todo);
  }
}
