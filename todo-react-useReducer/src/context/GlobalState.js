import React, { useState, useReducer } from 'react';

import TodoContext from './todo-context';

const GlobalState = props => {
    const todos = [
        { id: 'p1', text: 'text 1' },
        { id: 'p2', text: 'text 2' },
    ];

    return (
        <TodoContext.Provider
            value={{
                todos: todos,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
};

export default GlobalState;
