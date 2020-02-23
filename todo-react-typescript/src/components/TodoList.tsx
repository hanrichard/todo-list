import React from 'react';
import TodoItem from './TodoItem';
import { Todo, deleteTodo } from '../components/types';

interface TodoListProps {
    todos: Array<Todo>;
    deleteTodo: deleteTodo;
}

const TodoList: React.FunctionComponent<TodoListProps> = ({ todos, deleteTodo }) => {
    const showTodoList =
        todos &&
        todos.map(todo => {
            return <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />;
        });
    return (
        <div className="App">
            <ul>{showTodoList}</ul>
        </div>
    );
};

export default TodoList;
