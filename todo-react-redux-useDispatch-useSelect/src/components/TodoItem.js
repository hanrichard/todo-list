import React from 'react';

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
    return (
        <li className="" id={todo.id} style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>
            <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)} />
            {todo.text} <button onClick={e => deleteTodo(todo.id)}>X</button>
        </li>
    );
};

export default TodoItem;
