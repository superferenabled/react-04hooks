import * as z from 'zod';

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskState {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number;
}

export type TaskAction =
    | { type: 'ADD_TODO', payload: string }
    | { type: 'TOGGLE_TODO', payload: number }
    | { type: 'DELETE_TODO', payload: number };

const TodoSchema = z.object({
    id: z.number(),
    text: z.string(),
    completed: z.boolean(),
})

const TaskStateScheme = z.object({
    todos: z.array(TodoSchema),
    length: z.number(),
    completed: z.number(),
    pending: z.number(),
})

export const getTasksInitialState = ():TaskState => {
    const lsState = localStorage.getItem('task-state');
    const defaultState = {
        todos: [],
        length: 0,
        completed: 0,
        pending: 0,
    };

    if(!lsState) {
        return defaultState;
    }

    // validation with zod

    try {
        const result = TaskStateScheme.safeParse(JSON.parse(lsState));
        if(result.error) {
            return defaultState
        }

        return result.data;
    } catch (error) {
        console.error(error);
        return defaultState;
    }

};

export const tasksReducer = (state: TaskState, action: TaskAction): TaskState => {

    switch (action.type) {

        case 'ADD_TODO': {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };
            return {
                ...state,
                todos: [...state.todos, newTodo],
                length: state.todos.length + 1,
                pending: state.pending + 1,
            };
        }
        case 'TOGGLE_TODO': {
            const updatedTodos = state.todos.map((todo) => {
                if(todo.id === action.payload) {
                    return {...todo, completed: !todo.completed};
                }
                return todo;
            });
            const completedTodos = updatedTodos.filter((todo) => todo.completed);
            return {
                ...state,
                todos: updatedTodos,
                completed: completedTodos.length,
                pending: state.todos.length - completedTodos.length,
            };
        }
        case 'DELETE_TODO': {
            const updatedTodos =  state.todos.filter((todo) => todo.id !== action.payload);
            const completedTodos = updatedTodos.filter((todo) => todo.completed);
            return {
                ...state,
                todos: updatedTodos,
                length: updatedTodos.length,
                completed: completedTodos.length,
                pending: updatedTodos.length - completedTodos.length,
            };
        }
        default:
            return state;
    }

};