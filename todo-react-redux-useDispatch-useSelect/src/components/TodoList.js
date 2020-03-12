import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';
import { deleteTodo, toggleTodo } from '../store/actions/index';

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handledeleteTodo = id => {
        dispatch(deleteTodo(id));
    };

    const handledtoggleTodo = todo => {
        dispatch(toggleTodo(todo));
    };

    const showTodoList =
        todos &&
        todos.map(todo => {
            return <TodoItem key={todo.id} deleteTodo={handledeleteTodo} toggleTodo={handledtoggleTodo} todo={todo} />;
        });
    return (
        <div className="App">
            <ul>{showTodoList}</ul>
        </div>
    );
};

export default TodoList;
