import React, { useState, useEffect } from "react";
import api from "../../components/Api";
import Navbar from "../../components/Navbar";
import '../../Task.css';
import TaskListTable from "../../components/TaskListTable";

export default function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get('/tasks/',)
            .then((response) => {
                setLoading(false);
                setTasks(response.data.results);
            }).catch(error => console.log(error));
    }, []);

    if (loading) {
        return (
            <div className="loading">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <h1>All Tasks</h1>
                <TaskListTable tasks={tasks} />
            </div>
        </>
    );
}
