import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
  todos;

  constructor(private todoService: TodoService) {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }
}
