import React, { useState, useReducer } from 'react';
import { uuid } from 'uuidv4';

import TodoContext from './todo-context';
import { todosReducer, ADD_TODO, DELETE_TODO } from '../context/reducers';

const GlobalState = props => {
    const initialState = [
        { id: uuid(), text: 'test 1' },
        { id: uuid(), text: 'test 2' },
    ];
    const [todosState, dispatch] = useReducer(todosReducer, initialState);

    const addTodo = text => {
        dispatch({ type: ADD_TODO, text: text });
    };
    const deleteTodo = todoId => {
        dispatch({ type: DELETE_TODO, todoId: todoId });
    };

    console.log(todosState);
    return (
        <TodoContext.Provider
            value={{
                todos: todosState,
                addTodo: addTodo,
                deleteTodo: deleteTodo,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
};

export default GlobalState;
