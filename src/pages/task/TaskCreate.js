import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import api from "../../components/api";

export default function CreateTask() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [dueDate, setDueDate] = useState("");

    const { teamId } = useParams();

    const [fieldErrors, setfieldErrors] = useState({});
    const [otherErrors, setotherErrors] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/teams/${teamId}/`)
            .then((response) => {
                console.log(response.data.results);
            })
            .catch(error =>
                setotherErrors(error.response.data)
            );
    }, [teamId]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await api.post("/tasks/", {
                name,
                description,
                team_id: teamId,
                due_date: dueDate,
                start_date: startDate,
                status: 'not-started',
            });
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

                    <button type="submit" className="btn btn-primary">
                        Create
                    </button>
                </form>
            </div>
        </>
    );
}
