import { uuid } from 'uuidv4';
import * as actionTypes from '../actions/actionTypes';

const initialState = [
    { id: uuid(), title: 'test 1', completed: false },
    { id: uuid(), title: 'test 2', completed: false },
];

const todos = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RECEIVE_API_DATA:
            return [...state.concat(action.data)];
        case actionTypes.ADD_TODO:
            return [
                ...state,
                {
                    id: uuid(),
                    title: action.title,
                    completed: false,
                },
            ];
        case actionTypes.DELETE_TODO:
            return state.filter(item => item.id !== action.id);
        case actionTypes.TOGGLE_TODO:
            const newstate = state.map(todo => {
                if (action.todo === todo) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            });
            return newstate;
        default:
            return state;
    }
};

export default todos;
