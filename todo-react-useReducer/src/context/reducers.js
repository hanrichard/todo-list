import { uuid } from 'uuidv4';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (text, state) => {
    return [
        ...state,
        {
            id: uuid(),
            text: text,
        },
    ];
};

export const deleteTodo = (todoId, state) => {
    return state.filter(item => item.id !== todoId);
};
