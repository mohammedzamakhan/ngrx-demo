import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { LOAD_TODOS, LOAD_TODOS_SUCCESS } from '../actions/todo.actions';

@Injectable()
export class TodoEffects {
    @Effect() $loadTodos: Observable<Action> = this.actions$.ofType(LOAD_TODOS)
    // Map the payload into JSON to use as the request body
    .map(toPayload)
    .mergeMap(payload => {
        return this.http.get(`https://jsonplaceholder.typicode.com/todos`)
        // If successful, dispatch success action with result
        .map((data: any) => {
            //  do stuff you like here and then return success action
            return { type: LOAD_TODOS_SUCCESS, payload: data };
        });

    });

    constructor(
        private http: HttpClient,
        private actions$: Actions
    ) {}
}
