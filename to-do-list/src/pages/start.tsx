import React from 'react'
import ActionForm from '../containers/actionForm'
import TaskContainer from '../containers/taskContainer'
import withLayout from '../containers/withLayout'




const Start = () => {

  return (
    <>
    <div className='body-container'>
      <div className='myForm'>
        <ActionForm></ActionForm>
      </div>
      <div className='myContainer'>
        <TaskContainer/>
      </div>
    </div>
    </>
  )
}

export default withLayout(Start)