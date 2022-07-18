import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { todoAPI } from './apis/todoApi';
import todoReducer from './todoReducer'

const reducers = combineReducers({
    [todoAPI.reducerPath]: todoAPI.reducer,
    todosReducer: todoReducer,
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoAPI.middleware)
})



 export type RootState = ReturnType<typeof store.getState>;
 export type AppDispatch = typeof store.dispatch;
// setupListeners(store.dispatch)