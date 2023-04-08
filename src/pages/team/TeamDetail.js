import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import api from "../../components/api";

export default function TeamDetail() {
    const { teamId } = useParams();
    const [team, setTeam] = useState();

    useEffect(() => {
        api.get(`teams/${teamId}`)
            .then((response) => {
                setTeam(response.data);
            }).catch((error) => {
                console.log(error);
            });
    }, [teamId]);

    if (!team) {
        return <div><h3>Team not found.</h3></div>;
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="my-4">{team.name}</h1>

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

                    {team.tasks.length > 0 &&
                        <tbody>
                            {team.tasks && team.tasks.map(task => (
                                <tr key={task.id}>
                                    <td className="task-title"><a href={`/tasks/${task.id}`}>{task.name}</a></td>
                                    <td>{task.description.substring(0, 20)}...</td>
                                    <td>{new Date(task.due_date).toDateString()}</td>
                                    <td className="task-assignee">{task.assignees && task.assignees.map(assignee => (
                                        <span>{assignee.username}, </span>
                                    ))}</td>
                                    <td className={`status ${task.status}`}>{task.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    }

                    {team.tasks.length === 0 &&
                        <div>
                            <h4>There are no tasks for this team.<br />Tell the assigner to add one. Or give you access to do so.</h4>
                        </div>
                    }
                </table>

                <a href={`/teams/${team.id}/new-task`} className="create-button">Create New Task</a>
            </div>
        </>
    );
}
