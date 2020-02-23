import React, { useState } from 'react';
import './App.css';
import { uuid } from 'uuidv4';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import { Todo } from '../components/types';

const initialTodos: Array<Todo> = [
    { id: uuid(), text: 'test 1', complete: false },
    { id: uuid(), text: 'test 2', complete: false },
];

const App: React.FunctionComponent = () => {
    const [todos, setTodos] = useState(initialTodos);

    const deleteTodo = (id: string) => {
        setTodos(todos.filter(item => item.id !== id));
    };

    const addTodo = (text: string) => {
        setTodos([...todos, { id: uuid(), text: text, complete: false }]);
    };

    const toggleTodo = (selectedTodo: Todo) => {
        const newTodos = todos.map(todo => {
            if (selectedTodo === todo) {
                return {
                    ...todo,
                    complete: !todo.complete,
                };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    return (
        <div className="App">
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            <TodoForm addTodo={addTodo} />
        </div>
    );
};

export default App;
