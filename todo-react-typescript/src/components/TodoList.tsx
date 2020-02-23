import React from 'react';
import TodoItem from './TodoItem';
import { Todo, deleteTodo, toggleTodo } from '../components/types';

interface TodoListProps {
    todos: Array<Todo>;
    deleteTodo: deleteTodo;
    toggleTodo: toggleTodo;
}

const TodoList: React.FunctionComponent<TodoListProps> = ({ todos, deleteTodo, toggleTodo }) => {
    const showTodoList =
        todos &&
        todos.map(todo => {
            return <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />;
        });
    return (
        <div className="App">
            <ul>{showTodoList}</ul>
        </div>
    );
};

export default TodoList;
