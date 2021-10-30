import React, {useState} from 'react';



const AddTask = ({onAdd}: any) => {

  // States of inputs in the form.
  const [taskDesc, setTaskDesc] = useState('')
  const [date, setDate] = useState('')
  const [reminder, setReminder] = useState(false)

  
  const onSubmit = (e: any) => {
     e.preventDefault()

     if(taskDesc.length === 0 || date.length === 0)
       alert('Please add both a task and a date.')
     else
      onAdd(taskDesc, date, reminder)
  }

  const onReset = (e: any) => {
    e.preventDefault()
    setTaskDesc('')
    setDate('')
    setReminder(false)
  }

  return (
    // Form to add a new task
    <form className='add-form' onSubmit={onSubmit} onReset={onReset}>
      {/* Input task name */}
      <div className='form-control'>
        <label>Task</label>
          <input type="text" placeholder='Task description' value={taskDesc} onChange={(event: any) => setTaskDesc(event.target.value)} />
      </div>
      {/* Input task day */}
      <div className='form-control'>
        <label>Day & Time</label>
          <input type="text" placeholder='Task day & time' value={date} onChange={(event: any) => setDate(event.target.value)} />
      </div>
      {/* Input task reminder as a checkbox */}
      <div className='form-control-check'>
        <label>Set Reminder</label>
          <input 
            type="checkbox"
            value={`${reminder}`}
            onChange={(event: any) => setReminder(event.currentTarget.checked) } />
      </div>
      {/* Buttons to submit and clear the form respectively */}
      <input type="submit" value='Add Task' className='btn btn-block'/>
      <input type="reset" value='Clear Form' className='btn btn-block'/>
    </form>
  )

}

export default AddTask