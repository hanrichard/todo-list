import React from 'react';
import { connect, useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { deleteTodo, toggleTodo } from '../store/actions/index';

const TodoList = ({ deleteTodo, toggleTodo }) => {
    const todos = useSelector(state => state.todos);
    const showTodoList =
        todos &&
        todos.map(todo => {
            return <TodoItem key={todo.id} deleteTodo={deleteTodo} toggleTodo={toggleTodo} todo={todo} />;
        });
    return (
        <div className="App">
            <ul>{showTodoList}</ul>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    deleteTodo: id => dispatch(deleteTodo(id)),
    toggleTodo: todo => dispatch(toggleTodo(todo)),
});

export default connect(null, mapDispatchToProps)(TodoList);
