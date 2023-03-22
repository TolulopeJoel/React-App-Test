import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../components/api";

export default function TeamDetail() {
    const { teamId } = useParams();
    const [team, setTeam] = useState();

    useEffect(() => {
        api.get(`teams/${teamId}`)
            .then((response) => {
                setTeam(response.data);
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            });
    }, [teamId]);

    if (!team) {
        return <div><h3>Team not found.</h3></div>;
    }

    return (
        <>
            <div className="container">
                <h1>All Tasks</h1>
                <table className="table table-bordered table-hover my-5">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Description</th>
                            <th>Due Date</th>
                            <th>Assigner</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {team.tasks && team.tasks.map(task => (
                            <tr key={task.id}>
                                <td className="task-title"><a href={`/tasks/${task.id}`}>{task.name}</a></td>
                                <td>{task.description.substring(0, 20)}...</td>
                                <td>{new Date(task.due_date).toDateString()}</td>
                                <td className="task-assignee">{team.assigner.username}</td>
                                <td className={`status ${task.status}`}>{task.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <a href="/tasks/new" className="create-button">Create New Task</a>
            </div>
        </>
    );
}
