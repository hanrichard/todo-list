import React from 'react';
import TodoList from '../src/components/TodoList';
import TodoForm from '../src/components/TodoForm';

import GlobalState from './context/GlobalState';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <GlobalState>
                <TodoList /> <TodoForm />
            </GlobalState>
        </div>
    );
};

export default App;
