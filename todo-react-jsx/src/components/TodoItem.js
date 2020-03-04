import React from 'react';

const TodoItem = ({ todo: { id, text }, deleteTodo, onDragStart }) => {
    return (
        <li className="" id={id} onDragStart={e => onDragStart(e)}>
            {text}
            <button onClick={e => deleteTodo(id)}>X</button>
        </li>
    );
};

export default TodoItem;
