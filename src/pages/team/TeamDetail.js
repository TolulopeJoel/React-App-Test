import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import api from "../../components/Api";

export default function TeamDetail() {
    const { teamId } = useParams();
    const [team, setTeam] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get(`teams/${teamId}`)
            .then((response) => {
                setLoading(false);
                setTeam(response.data);
            }).catch((error) => {
                setLoading(false);
                console.log(error);
            });
    }, [teamId]);

    if (loading) {
        return (
            <div className="loading">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (!team) {
        return <div><h3>Team not found.</h3></div>;
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="my-4">{team.name}</h1>

                <div className="table-responsive">
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
                                        <td>
                                            {task.assignees && task.assignees.map((assignee, index) => (
                                                <span key={assignee.id} className="p-1">
                                                    {assignee.username}
                                                    {index < task.assignees.length - 1 ? ", " : "."}
                                                </span>
                                            ))}
                                        </td>
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
                </div>

                <a href={`/teams/${team.id}/new-task`} className="create-button">Create New Task</a>
            </div>
        </>
    );
}
