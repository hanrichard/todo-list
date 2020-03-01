import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { deleteTodo, toggleTodo, requestApiData } from '../store/actions/index';

class TodoList extends React.Component {
    componentDidMount() {
        this.props.requestApiData();
    }

    render() {
        console.log(this.props.todos);
        const showTodoList =
            this.props.todos &&
            this.props.todos.map(todo => {
                return (
                    <TodoItem
                        key={todo.id}
                        deleteTodo={this.props.deleteTodo}
                        toggleTodo={this.props.toggleTodo}
                        todo={todo}
                    />
                );
            });
        return (
            <div className="App">
                <ul>{showTodoList}</ul>
            </div>
        );
    }
}

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
