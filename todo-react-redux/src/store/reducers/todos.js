import { uuid } from 'uuidv4';
import * as actionTypes from '../actions/actionTypes';

const initialState = [
    { id: uuid(), text: 'test 1' },
    { id: uuid(), text: 'test 2' },
];

const todos = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [
                ...state,
                {
                    id: uuid(),
                    text: action.text,
                },
            ];

        default:
            return state;
    }
};

export default todos;
