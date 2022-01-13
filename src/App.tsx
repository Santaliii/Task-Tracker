import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'



const App: React.FC = () => {

  // Default state of the form.
  const [showForm, setShowForm] = useState<boolean>(false)
 
  // Default state of tasks, tasks and their properties change during runtime.
  const [tasks, setTasks] = useState([{} as {text: string, day: string, reminder: boolean, id: number}])


    // useEffect hook that fetches our tasks from the server each time we re-render the page.
    useEffect(() => {

      const getTasks = async () => {
        const tasksFromServer = await fetchTasks()
        setTasks(tasksFromServer)
      }
      getTasks()

    }, [])


    // Fetch all tasks
    const fetchTasks = async () => {
      // Wait for fetch to fetch the tasks from the URL and store it as a response
      const res = await fetch('http://localhost:5000/tasks')
      // Wait to get the res.json(), which is basically our tasks in JSON format.
      const data = await res.json()

      return data
    }

    // Fetch a single task using its ID
    const fetchTask = async (id: number) => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await res.json()

      return data
    }

    

    // Add Task
    const addTask = async (text: string, day: string, reminder: boolean) => {
      
      const res = await fetch(`http://localhost:5000/tasks`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({text, day, reminder}),
      })

      const data = await res.json()
      setTasks([...tasks, data])

    }

    // Delete Task
    const deleteTask = async (id: number) => {
      
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE'
      })

      // Set new state of tasks equal to the returned array from the tasks.filter() operation
      // Which returns existing tasks except for the one that was deleted.
      setTasks(tasks.filter((task) => {
        return task.id !== id
      }) )
    }

    // Toggle Reminder
    const toggleReminder = async (id: number) => {
      const taskToToggle = await fetchTask(id)
      const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          "Content-type": 'application/json'
        },
        body: JSON.stringify(updatedTask)
      })

      setTasks(
        tasks.map((task) => {
          // If id of double clicked task equals current id (we are currently iterating through the array using map() ),
          // then change no attributes of that task (...task) except for the reminder, which is to be toggled.
          return task.id === id ? {...task, reminder: !task.reminder} : task
      }))
    }

  return (
    
    <Router>
      <div className="container">

        <Header showForm={showForm} 
        title="TASK TRACKER" 
        onClick={() => setShowForm(!showForm)} />
        
        <Route path='/' 
        exact 
        render={() => (
          
          <>
            {/* Checks state of showForm. If true, shows the form component. Else, shows nothing */}
            {showForm ? <AddTask onAdd={addTask} /> : ''}
            {/* If the tasks array has elements, display them. If not, print feedback message */}
            {tasks.length > 0 ? 
            <Tasks onToggle={toggleReminder} onDelete={deleteTask} tasks={tasks}/> 
            : 'No Tasks To Show'}
          </>

        )} />

        <Route path="/about" component={About} />
        <Footer />

      </div>
      
    </Router>
  );
}

export default App;
