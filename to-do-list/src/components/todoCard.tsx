import React from 'react'
import { useDispatch } from 'react-redux'
import { useRemoveTodoMutation } from '../store/apis/todoApi'
import { removeTodos } from '../store/todoReducer'

interface TodoProps{
    id: number,
    title: string,
    desc: string,
    status: number,
    priority: number,
    date: string
}

const TodoCard = ({id,date,desc,priority,status,title}:TodoProps) => {

  const dispatch = useDispatch();
  const [removeTodo] = useRemoveTodoMutation();
   
const deleteTask = async(id:number)=>{
  await removeTodo(id);
  dispatch(removeTodos(id))

}

  return (
    <div className="card   todo-card">
        <div className="card-header d-flex justify-content-between">  
        {status === 1 && 'Pendiente '} 
        {status === 2 && 'En curso '} 
        {status === 3 && 'Finalizada '} 
        - Prioridad: 
        {priority === 1 && ' Baja'} 
        {priority === 2 && ' Media'} 
        {priority === 3 && ' Alta'}
        <button onClick={()=>deleteTask(id)} type="button" className="btn-close" aria-label="Close"></button>
        </div>
        <div className="card-body">
        <h5 className="card-title">{title} </h5>
        <small>{date}</small>
        <p className="card-text">{desc}</p>
        </div>
    </div>
  )
}

export default TodoCard