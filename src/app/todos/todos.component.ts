import { Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { TodoService } from './../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent implements OnInit {
  @Input() todos;
  @Output() delete = new EventEmitter();
  @Output() onToggle = new EventEmitter();
  constructor(private _todoService: TodoService) { }

  ngOnInit() {
  }

  deleteTodo(todo) {
    this.delete.emit(todo);
  }

  toggleCompleted(event, todo) {
    this.onToggle.emit({
      completed: event.target.checked,
      todo,
    });
  }
}
