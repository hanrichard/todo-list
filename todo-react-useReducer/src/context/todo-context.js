import React from 'react';
import { uuid } from 'uuidv4';

export default React.createContext({
    todos: [
        { id: uuid(), text: 'text 1' },
        { id: uuid(), text: 'text 2' },
    ],
    addTodo: todo => {},
    deleteTodo: todoId => {},
});
