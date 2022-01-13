import React from 'react';
import Task from './Task'

interface ITasksProps {
  tasks: {text: string, day: string,reminder: boolean, id: number}[],
  onToggle: (id: number) => Promise<void>,
  onDelete: (id: number) => Promise<void>
}

const Tasks: React.FC<ITasksProps> = ({tasks, onDelete, onToggle}: ITasksProps) => {
  return(
    <div className='task-container'>
      {tasks.map((task: any, index: any) => ( <Task key={index} onToggle={onToggle} onDelete={onDelete} task={task}/> ) ) }
    </div>
  )
}


export default Tasks