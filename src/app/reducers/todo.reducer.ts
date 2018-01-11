import { Action } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import { ITodo } from '../todo.model';
import * as TodoActions from '../actions/todo.actions';

export interface TodoState {
    data: ITodo[];
    loading: boolean;
}

export const initialState: TodoState = {
    data: [{
      id: '1',
      title: 'First todo',
      completed: true,
    }, {
      id: '2',
      title: 'Second todo',
      completed: false,
    }],
    loading: false
};


export function todoReducer(state: TodoState = initialState, action: TodoActions.Actions): TodoState {
    switch (action.type) {

        case TodoActions.ADD_TODO:
            // your action code here
            return {
              ...state,
              data: [
                ...state.data,
                {
                  id: new Date().toString(),
                  title: action.payload,
                  completed: false
                }
              ]
            };

        case TodoActions.DELETE_TODO: {
          const todo = action.payload;

          const index = state.data.indexOf(todo);
          return {
            ...state,
            data: [
              ...state.data.slice(0, index),
              ...state.data.slice(index + 1)
            ]
          };
        }

        case TodoActions.EDIT_TODO : {
          const { todo, changes } = action.payload;

          const index = state.data.indexOf(todo);

          return {
            ...state,
            data: [
              ...state.data.slice(0, index),
              {
                ...state.data[index],
                ...changes
              },
              ...state.data.slice(index + 1)
            ]
          };
        }

        case TodoActions.LOAD_TODOS_SUCCESS: {
          return {
            ...state,
            data: action.payload
          };
        }

        default:
            return state;
    }
}


/*
    Below are the selectors for this reducer. Make sure to make compact selectors as per
    requirements of your application.
*/

// export const getProperty1 = (state: TodoState) => state.property1;

// export const getProperty2 = (state: TodoState) => state.property2;
