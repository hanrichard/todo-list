import React from 'react';
import './App.css';
import { uuid } from 'uuidv4';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

const App = () => {
    const initialState = [
        { id: uuid(), text: 'test 1' },
        { id: uuid(), text: 'test 2' },
    ];

    const deleteTodo = id => {
        console.log(id);
    };

    const addTodo = todo => {
        console.log(todo);
    };

    return (
        <div className="App">
            <TodoList todos={initialState} deleteTodo={deleteTodo} />
            <TodoForm addTodo={addTodo} />
        </div>
    );
};

export default App;
