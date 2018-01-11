import { Action } from '@ngrx/store';

// Actions
export const ADD_TODO =           '[TODO] AddTodo';
export const DELETE_TODO =           '[TODO] DeleteTodo';
export const EDIT_TODO =           '[TODO] EDITTodo';
export const LOAD_TODOS =           '[TODO] LOADTodo';
export const LOAD_TODOS_SUCCESS =           '[TODO] EDITTodo SUCCESS';

// Action Creators

export class LoadTodos implements Action {
  readonly type = LOAD_TODOS;

}

export class LoadTodosSuccess implements Action {
  readonly type = LOAD_TODOS_SUCCESS;

  constructor(public payload: any) { }
}
export class AddTodo implements Action {
  readonly type = ADD_TODO;

  constructor(public payload: any) { }
}

export class DeleteTodo implements Action {
    readonly type = DELETE_TODO;

    constructor(public payload: any) { }
  }

  export class EditTodo implements Action {
    readonly type = EDIT_TODO;

    constructor(public payload: any) { }
  }

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
= AddTodo
| DeleteTodo
| EditTodo
| LoadTodosSuccess;
