import React, {useState, useRef} from 'react'
import { v4 as uuidv4 } from 'uuid';
import Task from './Task'

export default function TaskMaster({name}) {
    const [tasks, setTasks] = useState(taskList)
    const [titleNumber, setTitleNumber] = useState(4)
    const taskBody = useRef()


    function handleNewtask(){
        const newTask = 
          {
            id: uuidv4(),
            title: `Task: ${titleNumber}`,
            body: taskBody.current.value
          }  
        setTasks([...tasks, newTask])
        setTitleNumber(titleNumber + 1)
        taskBody.current.value = ''
    }
    return (
        <div>
        <p className="name-header">Hi, {name}!</p>
        <h1 className="title">Task Master</h1>
        <div className="task-container">
        {tasks.map(task => {
            return <Task task={task}/>
        })
        }
        <textarea ref={taskBody}></textarea>
        <button className="add-button"onClick={handleNewtask}></button>
        </div>
        </div>
    )
}

const taskList = [
    {
      id: uuidv4(),
      title: 'Task #1',
      body: "Cook for baby"
    },
    {
      id: uuidv4(),
      title: 'Task #2',
      body: "Do laundery"
    },
    {
      id: uuidv4(),
      title: 'Task #3',
      body: "Take out trash"
    }
  ]
