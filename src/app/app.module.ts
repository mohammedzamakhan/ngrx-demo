import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoService } from './todo.service';
import { TodosComponent } from './todos/todos.component';
import { TodoContainerComponent } from './containers/todo-container/todo-container.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [ AppComponent, TodosComponent, TodoContainerComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TodoService]
})
export class AppModule { }
