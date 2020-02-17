import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { deleteTodo } from '../store/actions/index';

const TodoList = ({ todos, deleteTodo }) => {
    console.log(todos);
    const showTodoList =
        todos &&
        todos.map(todo => {
            return <TodoItem key={todo.id} id={todo.id} onDelete={deleteTodo} text={todo.text} />;
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
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
