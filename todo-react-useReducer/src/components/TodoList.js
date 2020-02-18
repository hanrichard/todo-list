import React from 'react';
import TodoContext from '../context/todo-context';

const TodoList = () => {
    return (
        <TodoContext.Consumer>
            {context => (
                <React.Fragment>
                    <main className="products">
                        <ul>
                            {context.todos.map(item => (
                                <li key={item.id}>{item.text}</li>
                            ))}
                        </ul>
                    </main>
                </React.Fragment>
            )}
        </TodoContext.Consumer>
    );
};

export default TodoList;
