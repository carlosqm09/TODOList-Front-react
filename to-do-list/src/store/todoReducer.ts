import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import type {FormProps} from '../containers/actionForm'
import { type } from 'os';

interface TodosState{
    list: FormProps[]
}

const initialState: TodosState = {list: []};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodos(state, action:PayloadAction<FormProps[]>){
            state.list = action.payload;
        },
        addTodos(state, action: PayloadAction<FormProps>){
            state.list = [...state.list, action.payload]
        },
        removeTodos(state,action:PayloadAction<number>){
           const todoArray = state.list.filter((item)=> item.taskId != action.payload )
           state.list = todoArray;
        }
    }
})

export const {setTodos, addTodos, removeTodos} = todoSlice.actions;
export default todoSlice.reducer;

