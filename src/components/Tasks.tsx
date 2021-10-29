import React from 'react';
import Task from './Task'



const Tasks = ({tasks, onDelete, onToggle}: any) => {
  return(
    <div className='task-container'>
      {tasks.map((task: any) => ( <Task key={task.id} onToggle={onToggle} onDelete={onDelete} task={task}/> ) ) }
    </div>
  )
}

export default Tasks