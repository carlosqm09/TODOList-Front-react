import React, { useEffect } from 'react'
import TodoCard from '../components/todoCard'
import { useGetTodoListQuery } from '../store/apis/todoApi'
import {useDispatch, useSelector} from 'react-redux' 
import { RootState } from '../store/store'
import { setTodos } from '../store/todoReducer'

const TaskContainer = () => {
  const { data, isLoading } = useGetTodoListQuery();
  const {list} = useSelector((state: RootState)=> state.todosReducer );
  const dispatch = useDispatch();

  useEffect(()=>{
   if(data != undefined) dispatch(setTodos(data))
  },[data]
  )

  return (
    <>
      <h3>Lista de tareas</h3>

      <div className='todo-card-container'>
        {list.map(todoItem => {
          return <TodoCard
            key={todoItem.taskId}
            title={todoItem.taskTitle}
            desc={todoItem.taskDescription}
            status={todoItem.taskStatus}
            priority={todoItem.taskPriority}
            date={todoItem.taskDate}
            id={todoItem.taskId}
          />
        })}
      </div>

    </>
  )
}

export default TaskContainer