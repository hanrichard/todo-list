import React, { useState } from 'react';
const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (value.trim() === '') {
                        return;
                    }
                    addTodo(value);
                    setValue('');
                }}
            >
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
