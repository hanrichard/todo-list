import { uuid } from 'uuidv4';

const initialState = [
    { id: uuid(), text: 'test 1' },
    { id: uuid(), text: 'test 2' },
];

const todos = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default todos;
