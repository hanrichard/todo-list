// import React from 'react';

// // const TodoItem = ({ todo: { id, text }, deleteTodo }) => {
// //     return (
// //         <li className="" id={id}>
// //             {text}
// //             <button onClick={e => deleteTodo(id)}>X</button>
// //         </li>
import React from 'react';
import { Todo, deleteTodo } from '../components/types';

interface TodoProps {
    todo: Todo;
    deleteTodo: deleteTodo;
}

const TodoItem: React.FunctionComponent<TodoProps> = ({ todo: { id, text }, deleteTodo }) => {
    return (
        <li className="" id={id}>
            {text}
            <button onClick={e => deleteTodo(id)}>X</button>
        </li>
    );
};

export default TodoItem;
