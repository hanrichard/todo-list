// import React from 'react';

// // const TodoItem = ({ todo: { id, text }, deleteTodo }) => {
// //     return (
// //         <li className="" id={id}>
// //             {text}
// //             <button onClick={e => deleteTodo(id)}>X</button>
// //         </li>
import React from 'react';
import { Todo, deleteTodo, toggleTodo } from '../components/types';

interface TodoProps {
    todo: Todo;
    deleteTodo: deleteTodo;
    toggleTodo: toggleTodo;
}

const TodoItem: React.FunctionComponent<TodoProps> = ({ todo, deleteTodo, toggleTodo }) => {
    return (
        <li className="" id={todo.id} style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>
            <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)} />
            {todo.text}
            <button onClick={e => deleteTodo(todo.id)}>X</button>
        </li>
    );
};

export default TodoItem;
