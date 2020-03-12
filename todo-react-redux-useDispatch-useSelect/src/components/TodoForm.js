import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { addTodo } from '../store/actions/index';

const TodoForm = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const handleAddTodo = e => {
        e.preventDefault();
        dispatch(addTodo(value));
        setValue('');
    };

    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <input
                    onChange={event => {
                        setValue(event.target.value);
                    }}
                    value={value}
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};
export default TodoForm;
