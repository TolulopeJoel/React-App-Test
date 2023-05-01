import React, { useState, useEffect } from "react";
import api from "../../components/Api";
import Navbar from "../../components/Navbar";
import '../../Task.css';
import TaskListTable from "../../components/TaskListTable";
import { Pagination } from '@mui/material';
import Stack from '@mui/material/Stack';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        api.get(`/tasks/?page=${currentPage}`)
            .then((response) => {
                setLoading(false);
                setTasks(response.data.results);
                setTotalPages(Math.ceil(response.data.count / 10));
            })
            .catch((error) => console.log(error));
    }, [currentPage]);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

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

                <div className="d-flex justify-content-center align-items-center mt-5">
                    <Stack spacing={2}>
                        <Pagination count={totalPages} page={currentPage} shape='rounded' onChange={handlePageChange} />
                    </Stack>
                </div>

                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    events={tasks.map(task => ({
                        title: task.name,
                        start: task.start_date,
                        end: task.end_date,
                    }))}
                    eventDurationEditable={false}
                    eventDuration={"00:00:01"}
                    displayEventTime={true}
                />
            </div>
        </>
    );
}
