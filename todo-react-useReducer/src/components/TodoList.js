import React from 'react';
import TodoContext from '../context/todo-context';
import TodoItem from '../components/TodoItem';

const TodoList = () => {
    return (
        <TodoContext.Consumer>
            {context => {
                console.log(context);
                return (
                    <React.Fragment>
                        <main className="">
                            <ul>
                                {context.todos.map(todo => (
                                    <TodoItem key={todo.id} todo={todo} deleteTodo={context.deleteTodo} />
                                ))}
                            </ul>
                        </main>
                    </React.Fragment>
                );
            }}
        </TodoContext.Consumer>
    );
};

export default TodoList;
