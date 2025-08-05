import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import ProgressTracker from "./components/ProgressTracker"
import { useEffect, useState } from "react"
import "./Style.css"

export default function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  })
  
  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks]
    newtask[index] = updatedTask
    setTasks(newtask)
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !=index))
  }

  const clearTasks = () => {
    setTasks([])
  }

  return (
    <div className="App">
      <header>
        <h1 className="title">EFFICIO</h1>
        <p className="tagline">Your efficient task manager</p>
      </header>
      <TaskForm addTask = {addTask}/>
      <TaskList tasks = {tasks} updateTask = {updateTask} deleteTask = {deleteTask}/>
      <ProgressTracker tasks = {tasks}/>

      {tasks.length>1 && (<button className="clear-btn" onClick={clearTasks}> 
        Clear All Tasks</button>)}
    </div>
  )
}