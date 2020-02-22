import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo }) => {
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
