import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../components/api";

export default function CreateTeam() {
    const [name, setName] = useState("");

    const [fieldErrors, setfieldErrors] = useState({});
    const [otherErrors, setotherErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await api.post("/teams/", { name });
            navigate("/")
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

                <button type="submit" className="btn btn-primary">
                    add Team
                </button>
            </form>
        </div>
    );
}
