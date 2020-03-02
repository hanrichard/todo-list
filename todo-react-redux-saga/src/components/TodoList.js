import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { deleteTodo, toggleTodo, requestApiData } from '../store/actions/index';

const TodoList = ({ todos, requestApiData, toggleTodo }) => {
    useEffect(() => {
        requestApiData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

const mapStateToProps = state => {
    return {
        todos: state.todos,
    };
};

const mapDispatchToProps = dispatch => ({
    deleteTodo: id => dispatch(deleteTodo(id)),
    toggleTodo: todo => dispatch(toggleTodo(todo)),
    requestApiData: () => dispatch(requestApiData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
