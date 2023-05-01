import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import api from "../../components/Api";
import TaskListTable from "../../components/TaskListTable";

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

                <TaskListTable tasks={team.tasks} />

                <a href={`/teams/${team.id}/new-task`} className="btn btn-success btn-gradient btn-lg w-25 p-2 my-3">Create new task</a>
            </div>
        </>
    );
}
