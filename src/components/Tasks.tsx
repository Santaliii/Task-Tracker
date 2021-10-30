import React from 'react';
import Task from './Task'



const Tasks = ({tasks, onDelete, onToggle}: any) => {
  return(
    <div className='task-container'>
      {tasks.map((task: any, index: any) => ( <Task key={index} onToggle={onToggle} onDelete={onDelete} task={task}/> ) ) }
    </div>
  )
}

export default Tasks