import { useState } from "react"

export default function TaskForm({addTask}) {
    const [task, setTask] = useState("")
    const [priority, setPriority] = useState("Medium")
    const [category, setCategory] = useState("General")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask({text: task, priority, category, completed: false})

        //Reset States:
        setTask("")
        setPriority("Medium")
        setCategory("General")
    }

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <div id="inp">
                <input type="text" value={task} placeholder="Enter your task" onChange={(e)=>setTask(e.target.value)}/>
                <span><button type="submit">Add Task</button></span>
            </div>

            <div id="btns">
                <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>

            <div id="btns">
                <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <option value="General">General</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                </select>
            </div>
        </form>
    )
}