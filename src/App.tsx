import React, {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'



const App = () => {

  // Default state of the form.
  const [showForm, setShowForm] = useState(false)

  // Default state of tasks, tasks and their properties change during runtime.
  const [tasks, setTasks] = useState([
      {
        id: 1,
        text: 'Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
      },
      {
        id: 2,
        text: 'Date',
        day: 'Feb 6th at 1:30pm',
        reminder: true
      },
      {
        id: 3,
        text: 'Sleepover',
        day: 'Feb 5th at 2:30pm',
        reminder: false
      }
    ])


    // Add Task
    const addTask = (text: string, day: string, reminder: boolean) => {
      const id = (tasks.length === 0 ? 0 : tasks[tasks.length - 1].id + 1);
      const newTask = {id, text, day, reminder}
      setTasks([...tasks, newTask])
    }

    // Delete Task
    const deleteTask = (id: number) => {
      // Set new state of tasks equal to the returned array from the tasks.filter() operation
      // Which returns existing tasks except for the one that was deleted.
      setTasks(tasks.filter((task) => {
        return task.id !== id
      }) )
    }

    // Toggle Reminder
    const toggleReminder = (id: number) => {
      setTasks(
        tasks.map((task) => {
          // If id of double clicked task equals current id (we are currently iterating through the array using map() ),
          // then change no attributes of that task (...task) except for the reminder, which is to be toggled.
          return task.id === id ? {...task, reminder: !task.reminder} : task
      }))
    }

  return (
    <div className="container">
      <Header showForm={showForm} title="Task Tracker" onClick={() => setShowForm(!showForm)} />
      {/* Checks state of showForm. If true, shows the form component. Else, shows nothing */}
      {showForm ? <AddTask onAdd={addTask} /> : ''}
      {/* If the tasks array has elements, display them. If not, print feedback message */}
      {tasks.length > 0 ? <Tasks onToggle={toggleReminder} onDelete={deleteTask} tasks={tasks}/> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
