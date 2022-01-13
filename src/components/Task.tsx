import React from 'react';
import { FaTimes } from 'react-icons/fa'

// 
interface ITaskProps {
  task: {
    text: string, 
    day: string,
    reminder: boolean,
    id: number
  },
  onToggle: (id: number) => Promise<void>,
  onDelete: (id: number) => Promise<void>
}

const Task: React.FC<ITaskProps> = ({task, onDelete, onToggle}: ITaskProps) => {
  return (
    <div onDoubleClick={() => onToggle(task.id)} className={`task ${task.reminder ? 'reminder' : ''}`}>
      <h3>{task.text} <FaTimes className='deleteIcon' onClick={() => onDelete(task.id)} style={{ color: 'red', cursor: 'pointer' }} /></h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task