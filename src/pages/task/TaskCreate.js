import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import api from "../../components/api";

export default function CreateTask() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [assignees, setAssignees] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [dueDate, setDueDate] = useState("");

    const { teamId } = useParams();
    const [team, setTeam] = useState("");

    const [fieldErrors, setfieldErrors] = useState({});
    const [otherErrors, setotherErrors] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/teams/${teamId}/`)
            .then((response) => {
                setTeam(response.data);
            })
            .catch(error =>
                setotherErrors(error.response.data)
            );
    }, [teamId]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await api.post("/tasks/", {
                team_id: teamId,
                name,
                description,
                status: 'not-started',
                start_date: startDate,
                due_date: dueDate,
                assignees_username: assignees.join(','),
            })
            navigate(`/teams/${teamId}/`)
        } catch (error) {
            if (error.response.data.detail) {
                setotherErrors([error.response.data.detail]);
            } else if (error.response.data.message) {
                setotherErrors([error.response.data.message]);
            } else if (error.response.data.non_field_errors) {
                setotherErrors(error.response.data.non_field_errors);
            } else {
                setfieldErrors(error.response.data);
            }
        }
    };

    const handleAssigneesChange = (event) => {
        const selectedAssignee = event.target.value;
        const assigneeIndex = assignees.indexOf(selectedAssignee);

        if (assigneeIndex === -1) {
            // Add the assignee to the list of selected assignees
            setAssignees(prevAssignees => [...prevAssignees, selectedAssignee]);
        } else {
            // Remove the assignee from the list of selected assignees
            setAssignees(prevAssignees => prevAssignees.filter(assignee => assignee !== selectedAssignee));
        }
    };


    return (
        <>
            <Navbar />
            <div className="container">
                <h1>Create Task</h1>
                {otherErrors && Object.values(otherErrors).map((errorMessage) => {
                    return (
                        <div className="alert alert-danger w-100">{errorMessage}</div>
                    )
                })}
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        {fieldErrors.name && (<div className="text-danger w-100">{fieldErrors.name}</div>)}
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        {fieldErrors.description && (<div className="text-danger w-100">{fieldErrors.description}</div>)}
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            rows="3"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="due_date">Start Date</label>
                        {fieldErrors.start_date && (<div className="text-danger w-100">{fieldErrors.start_date}</div>)}
                        <input
                            type="datetime-local"
                            className="form-control"
                            id="due_date"
                            name="due_date"
                            value={startDate}
                            onChange={(event) => setStartDate(event.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="due_date">Due Date</label>
                        {fieldErrors.due_date && (<div className="text-danger w-100">{fieldErrors.due_date}</div>)}
                        <input
                            type="datetime-local"
                            className="form-control"
                            id="due_date"
                            name="due_date"
                            value={dueDate}
                            onChange={(event) => setDueDate(event.target.value)}
                        />
                    </div>

                    {team.teamates && team.teamates.map(teamate => (
                        <div className="form-group">
                            {fieldErrors.assignees && (<div className="text-danger w-100">{fieldErrors.assignees}</div>)}
                            <input
                                type="checkbox"
                                id={teamate.username}
                                name={teamate.username}
                                value={teamate.username}
                                onChange={(event) => {
                                    if (event.target.checked) {
                                        setAssignees(assignees.concat([teamate.username]));
                                    } else {
                                        setAssignees(assignees.filter((username) => username !== teamate.username));
                                    }
                                }}
                            />
                            <label htmlFor="assignees">{teamate.username}</label>
                        </div>
                    ))}

                    <button type="submit" className="btn btn-primary">
                        Create
                    </button>
                </form>
            </div>
        </>
    );
}
