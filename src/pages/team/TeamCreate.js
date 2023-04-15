import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import api from "../../components/Api";

export default function CreateTeam() {
    const [name, setName] = useState("");
    const [temateEmails, setTeamateEmails] = useState("");

    const [fieldErrors, setfieldErrors] = useState({});
    const [otherErrors, setotherErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await api.post("/teams/", {
                name,
                teamate_emails: temateEmails
            });
            navigate("/teams")
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
                    <div className="form-group my-3">
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

                    <div className="form-group my-3">
                        <label htmlFor="teamates">Teamates</label>
                        {fieldErrors.name && (<div className="text-danger w-100">{fieldErrors.name}</div>)}
                        <input
                            type="text"
                            className="form-control"
                            id="teamates"
                            name="teamates"
                            value={temateEmails}
                            onChange={(event) => setTeamateEmails(event.target.value)}
                        />
                        {console.log(typeof temateEmails)}
                    </div>

                    <button type="submit" className="btn btn-primary my-3">
                        add Team
                    </button>
                </form>
            </div></>
    );
}
