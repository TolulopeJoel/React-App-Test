import React, { useState, useEffect } from "react";
import api from "../../components/Api";
import Navbar from "../../components/Navbar";
import '../../Task.css';

export default function TeamList() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        api.get('/teams/')
            .then((response) => {
                setTeams(response.data.results);
            }).catch(error => console.log(error));
    }, []);



    return (
        <>
        <Navbar />
            <div className="container">

                <h1 className="display-6 my-5">Select a team to view tasks.</h1>

                {teams.length > 0 &&
                    <div>
                        {teams && teams.map(team => (
                            <div>
                                <div className="d-flex justify-content-between border border-2 align-items-center rounded-4 my-5 p-3">
                                    <h6><a href={`/teams/${team.id}`}>{team.name}</a></h6>
                                    <div><b>{(team.assigner.username).toUpperCase()}</b></div>
                                </div>
                            </div>
                        ))}
                    </div>
                }

                {teams.length === 0 &&
                    <div>
                        <h4>You are not in a team yet.<br />Create one or ask your friends to add you to a current one.</h4>
                    </div>
                }

                <a href="/teams/new" className="btn btn-lg my-3 mx-auto add-password text-primary">Add new team +</a>
            </div>
        </>

    );
}
