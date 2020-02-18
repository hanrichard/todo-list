import { uuid } from 'uuidv4';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const todosReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: uuid(),
                    text: action.text,
                },
            ];
        case DELETE_TODO:
            console.log(action);
            return state.filter(item => item.id !== action.todoId);
        default:
            return state;
    }
};
