import React, { useState } from 'react';
import './App.css';
import { uuid } from 'uuidv4';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

const App = () => {
    const initialState = [
        { id: uuid(), text: 'test 1' },
        { id: uuid(), text: 'test 2' },
    ];

    const [todos, setTodos] = useState(initialState);

    const deleteTodo = (todos, id) => {
        setTodos(todos.filter(item => item.id !== id));
    };

    const addTodo = todo => {
        setTodos([...todos, { id: uuid(), text: todo }]);
    };

    const onDragStart = e => {
        console.log(e);
    };

    return (
        <div className="App">
            <TodoList todos={todos} deleteTodo={deleteTodo} onDragStart={onDragStart} />
            <TodoForm addTodo={addTodo} />
        </div>
    );
};

export default App;
