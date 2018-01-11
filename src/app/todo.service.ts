import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { ITodo } from './todo.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class TodoService {

  todos = [];

  constructor(private http: HttpClient) { }

  getTodos() {
    return of([{
      id: '1',
      title: 'First todo',
      completed: true,
    }, {
      id: '2',
      title: 'Second todo',
      completed: false,
    }])
    // return this.http.get(`https://jsonplaceholder.typicode.com/todos`)
      .pipe(
        tap(
          (results: ITodo[]) => this.todos = results
        )
      );
  }

  getNumberOfTodos() {
    return of(this.todos.length);
  }

  addTodo(text) {
    this.todos.push({
      id: new Date().toString(),
      title: text,
      completed: false
    });
  }

  deleteTodo(todo) {
    const index = this.todos.findIndex(t => {
      return t.title === todo.title;
    });
    this.todos.splice(index, 1);
  }

  toggleCompleted(completed, todo) {
    const index = this.todos.findIndex(t => {
      return t.title === todo.title;
    });

    this.todos[index].completed = completed;
  }

}
