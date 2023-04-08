import React, { useState, useEffect } from "react";
import api from "../../components/api";
import Navbar from "../../components/Navbar";
import '../../Task.css';

export default function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        api.get('/tasks/',)
            .then((response) => {
                setTasks(response.data.results);
            }).catch(error => console.log(error));
    }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                <h1>All Tasks</h1>
                <table className="table table-bordered table-hover my-5">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Description</th>
                            <th>Due Date</th>
                            <th>Assignees</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks && tasks.map(task => (
                            <tr key={task.id}>
                                <td className="task-title"><a href={`/tasks/${task.id}`}>{task.name}</a></td>
                                <td>{task.description.substring(0, 20)}...</td>
                                <td>{new Date(task.due_date).toDateString()}</td>
                                <td className="task-assignee">{task.assignees && task.assignees.map(assignee => (
                                    <span>{assignee.username}. </span>
                                ))}</td>
                                <td className={`status ${task.status}`}>{task.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
