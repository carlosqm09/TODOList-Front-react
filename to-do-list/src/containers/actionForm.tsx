import React from 'react'
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
  } from 'formik';
import { useAddTodoMutation } from '../store/apis/todoApi';
import type { AddTodo } from '../store/apis/todoApi';
import { useDispatch } from 'react-redux';
import { addTodos } from '../store/todoReducer';

export interface FormProps {
    taskId: number,
    taskTitle: string,
    taskDescription: string,
    taskDate: string,
    taskStatus: number,
    taskPriority: number,
}  

const ActionForm = () => {
  const [addTodo, {isLoading}] = useAddTodoMutation();
  const dispatch = useDispatch();

  return (
   <>
    <div className="card card-width " >
        <div className="card-body">
            <h4 className="card-title">Agregar nueva tarea</h4>
            <Formik 
            initialValues={{
                taskID: 0,
                taskTitle: '',
                taskDescription: '',
                taskDate: new Date(Date.now()).toLocaleString().split(',')[0],
                taskStatus: 0,
                taskPriority: 0,
            }}
            onSubmit={async (values, actions) => {
                const res:any = await addTodo(values)
                console.log(res)
                if(res.hasOwnProperty('data')){
                    const newTodo = res.data
                    dispatch(addTodos(newTodo))
                    actions.resetForm();
                }
              }}
            >
                      {props => (

                          <Form>
                              <label htmlFor="taskTitle"> Nombre de la tarea </label>
                              <Field className="form-control" id="taskTitle" name="taskTitle" placeholder="Nombre de la tarea" onChange={props.handleChange} value={props.values.taskTitle}/>
                              <br />
                              <label htmlFor="taskDescription">Descripcion de la tarea</label>
                              <Field as='textarea' className="form-control" id="taskDescription" name="taskDescription" placeholder="Descripcion de la tarea" onChange={props.handleChange} value={props.values.taskDescription}/>
                              <br />
                              <label htmlFor="taskDate">Fecha de tarea</label>
                              <Field className="form-control" id="taskDate" name="taskDate" disabled placeholder="Fecha de tarea" onChange={props.handleChange} value={new Date(Date.now()).toLocaleString().split(',')[0]}/>
                              <br />
                              <label htmlFor="taskStatus">Estatus de la tarea</label>
                              <Field className="form-control" as="select" id="taskStatus" name="taskStatus"  placeholder="Estatus de la tarea" onChange={props.handleChange} value={props.values.taskStatus}>
                                  <option selected  hidden>Seleccione una opcion</option>
                                  <option value={1} >Pendiente</option>
                                  <option value={2} >En proceso</option>
                                  <option value={3} >Finalizada</option>

                              </Field>
                              <br />
                              <label htmlFor="taskPriority">Prioridad</label>
                              <Field className="form-control" as="select" id="taskPriority" name="taskPriority" placeholder="Prioridad" onChange={props.handleChange} value={props.values.taskPriority}>
                                  <option selected hidden>Seleccione una opcion</option>
                                  <option value={3}>Alta</option>
                                  <option value={2}>Media</option>
                                  <option value={1}>Baja</option>
                              </Field>
                              <br />
                              {props.errors.taskTitle && <div id="feedback">{props.errors.taskTitle}</div>}
                              <br />
                              <button className='btn text-white btn-success' type="submit">Agregar</button>
                          </Form>
                      )}
               
            </Formik>


        </div>
    </div>
   </>
  )
}

export default ActionForm