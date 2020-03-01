import * as actionTypes from './actionTypes';

export const addTodo = text => ({
    type: actionTypes.ADD_TODO,
    text,
});

export const deleteTodo = id => ({
    type: actionTypes.DELETE_TODO,
    id,
});

export const toggleTodo = todo => ({
    type: actionTypes.TOGGLE_TODO,
    todo,
});

export const requestApiData = () => ({
    type: actionTypes.REQUEST_API_DATA,
});

export const receiveApiData = data => ({
    type: actionTypes.RECEIVE_API_DATA,
    data,
});
