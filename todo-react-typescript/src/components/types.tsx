export type Todo = {
    text: string;
    id: string;
};

export type deleteTodo = (id: string) => void;

export type addTodo = (text: string) => void;
