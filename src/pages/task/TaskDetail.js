import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import api from "../../components/Api";

export default function TaskDetail() {
    const { taskId } = useParams();
    const [task, setTask] = useState(null);

    useEffect(() => {
        api.get(`tasks/${taskId}`)
            .then((response) => {
                setTask(response.data);
            }).catch((error) => {
                console.log(error);
            });
    }, [taskId]);

    if (!task) {
        return <div><h3>Task not found.</h3></div>;
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <h1>{task.name}</h1>
                <table className="task-details-table">
                    <tbody>
                        <tr>
                            <td>Description:</td>
                            <td>{task.description}</td>
                        </tr>
                        <tr>
                            <td>Start Date:</td>
                            <td>{new Date(task.start_date).toLocaleDateString()}</td>
                        </tr>
                        <tr>
                            <td>Due Date:</td>
                            <td>{new Date(task.due_date).toLocaleDateString()}</td>
                        </tr>
                        <tr>
                            <td>Assignee:</td>
                            <td>{task.team && task.team.assigner.username}</td>
                        </tr>
                        <tr>
                            <td>Status:</td>
                            <td>{task.status}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="col-lg-2 col-sm-12 my-2">
                    <a href={`/tasks/edit/${task.id}/`} className="btn btn-outline-dark w-100">Edit</a>
                </div>

                <div className="col-lg-2 col-sm-12 my-2">
                    <a href={`/tasks/delete/${task.id}/`} className="btn btn-outline-danger w-100">Delete</a>
                </div>
            </div>
        </>
    );
}
