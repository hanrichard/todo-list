import React, { useState } from 'react';

interface AddTodoProps {
    addTodo: (text: string) => void;
}

const TodoForm: React.FunctionComponent<AddTodoProps> = ({ addTodo }) => {
    const [value, setValue] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (value.trim() === '') {
            return;
        }
        addTodo(value);
        setValue('');
    };

    return (
        <div>
            <form>
                <input onChange={handleChange} value={value} />
                <button type="submit" onClick={handSubmit}>
                    Add Todo
                </button>
            </form>
        </div>
    );
};

export default TodoForm;
