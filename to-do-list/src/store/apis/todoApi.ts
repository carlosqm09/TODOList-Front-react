import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {FormProps} from '../../containers/actionForm'

export const todoAPI = createApi({
    reducerPath: 'todoAPI',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://localhost:7104/api'
    }),
    endpoints: (builder) => ({
        getTodoList: builder.query<FormProps[], void>({
            query: () => '/MyTasks'
        }),
        getTodoByID: builder.query({
            query: (id:number) => `/MyTasks/${id}`
        }),
        addTodo: builder.mutation<FormProps, Partial<FormProps>>({
            query(body) {
              return {
                url: `/MyTasks`,
                method: 'POST',
                body,
              }
            },

          }),
          removeTodo: builder.mutation<{ success: boolean; id: number }, number>({
            query(id) {
              return {
                url: `/MyTasks/${id}`,
                method: 'DELETE',
              }
            },

          }),
    })
})

export const { useGetTodoListQuery, useGetTodoByIDQuery, useAddTodoMutation, useRemoveTodoMutation } = todoAPI;
export type AddTodo = ReturnType<typeof useAddTodoMutation>;
