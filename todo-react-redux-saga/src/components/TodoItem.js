import React from 'react';

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
    return (
        <li className="" id={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo)} />
            {todo.title} <button onClick={e => deleteTodo(todo.id)}>X</button>
        </li>
    );
};

export default TodoItem;
