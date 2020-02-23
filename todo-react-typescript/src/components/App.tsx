import React, { useState } from 'react';
import './App.css';
import { uuid } from 'uuidv4';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import { Todo } from '../components/types';

const initialTodos: Array<Todo> = [
    { id: uuid(), text: 'test 1' },
    { id: uuid(), text: 'test 2' },
];

const App: React.FunctionComponent = () => {
    const [todos, setTodos] = useState(initialTodos);

    const deleteTodo = (id: string) => {
        console.log(id);
        setTodos(todos.filter(item => item.id !== id));
    };

    const addTodo = (text: string) => {
        console.log(text);
        setTodos([...todos, { id: uuid(), text: text }]);
    };

    return (
        <div className="App">
            <TodoList todos={todos} deleteTodo={deleteTodo} />
            <TodoForm addTodo={addTodo} />
        </div>
    );
};

export default App;
