// reducers for todo list
import { ToDoListConstants } from './constants';

export interface ITodo {
    id: number,
    text: string,
    date: string,
    completed: boolean
    handleClickDelete?: any
    handleEditTodo?: any
}

export const initialState: ITodo = {
    id: 0,
    text: 'test',
    date: '1/1/2021',
    completed: false
}

export const reducers = (state = [initialState], action: any) => {
    switch (action.type) {
        case ToDoListConstants.ADD_TODO:
            return [
                ...state,
                { id: state?.length + 1 || 0 + 1, ...action.payload }
            ]
        case ToDoListConstants.DELETE_TODO:
            return state.filter((todo: ITodo) => todo?.id !== action.payload)

        case ToDoListConstants.EDIT_TODO:
            return state.map((todo: ITodo) => {
                if (todo?.id === action.payload?.id) {
                    return { ...todo, ...action.payload }
                }
                return todo
            })
        default:
            return state;
    }

}

