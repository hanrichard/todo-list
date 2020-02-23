export type Todo = {
    text: string;
    id: string;
    complete: boolean;
};

export type deleteTodo = (id: string) => void;

export type addTodo = (text: string) => void;

export type toggleTodo = (selectedTodo: Todo) => void;
