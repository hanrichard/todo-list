import React from 'react';

const TodoItem = ({ text, id, deleteTodo }) => {
    return (
        <li className="" id={id}>
            {text} <button onClick={e => deleteTodo(id)}>X</button>
        </li>
    );
};

export default TodoItem;
