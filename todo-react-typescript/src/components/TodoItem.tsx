// import React from 'react';

// // const TodoItem = ({ todo: { id, text }, deleteTodo }) => {
// //     return (
// //         <li className="" id={id}>
// //             {text}
// //             <button onClick={e => deleteTodo(id)}>X</button>
// //         </li>
import React from 'react';

interface TodoProps {
    todo: {
        text: string;
        id: string;
    };
    deleteTodo: (id: string) => void;
}
const TodoItem: React.FunctionComponent<TodoProps> = ({ todo, deleteTodo }) => {
    return <div onClick={() => deleteTodo(todo.id)}>{todo.text}</div>;
};

export default TodoItem;
