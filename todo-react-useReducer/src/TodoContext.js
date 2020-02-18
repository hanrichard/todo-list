import React from 'react';
import { uuid } from 'uuidv4';

// Context is the global state to manage the todo list.
// This will be rewritten by the App that will use `useTodos`
// hook to manage context. Current value will be initial.
const TodoContext = React.createContext([
    { id: uuid(), text: 'test 1' },
    { id: uuid(), text: 'test 2' },
]);

export default TodoContext;
