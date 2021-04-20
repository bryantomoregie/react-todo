import React from 'react'

export default function Task({task}) {
    return (
        <div className="task-card">
            <h3>{task.title}</h3>
            <p>{task.body}</p>
        </div>
    )
}
