import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// import { TodoService } from './todo.service';
import { Store, createSelector } from '@ngrx/store';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular 5';
  todosComplexCalc;

  constructor(private store: Store<any>, private cdr: ChangeDetectorRef) {
    // this.todoService.getTodos().subscribe(todos => {
    //   this.todos = todos;
    // });

    const getTodos = state => state.todos.data;

    const getTodosLength = createSelector(
      getTodos,
      (todos: any) => {
        return todos.length;
      }
    );

    const complexCalcSelector = createSelector(
      getTodosLength,
      length => {
        console.log('changes');
        return length * 200000;
      }
    );

    this.store.select(complexCalcSelector).subscribe(length => {
      this.todosComplexCalc = length;
    });
  }

  ngOnInit() {
    this.store.subscribe(() => {
      this.cdr.detectChanges();
    });
  }
}
