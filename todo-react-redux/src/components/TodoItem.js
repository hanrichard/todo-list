import React from 'react';

const TodoItem = ({ text, id, onDelete }) => {
    return (
        <li className="" onClick={e => onDelete(id)} id={id}>
            {text}
        </li>
    );
};

export default TodoItem;
