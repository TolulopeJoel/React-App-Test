import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from "../../components/Navbar";
import api from "../../components/Api";
import { NativeSelect } from "@mui/material";

const theme = createTheme();


export default function TaskEdit() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [startDate, setStartDate] = useState("");
    const [dueDate, setDueDate] = useState("");
    const { taskId } = useParams();
    const [fieldErrors, setfieldErrors] = useState({});
    const [otherErrors, setotherErrors] = useState({});
    const navigate = useNavigate();

    function catchError(error) {
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

    async function fetchData() {
        await api.get(`/tasks/${taskId}/`)
            .then((response) => {
                setName(response.data.name)
                setDescription(response.data.description)
                setStatus(response.data.status)
                setStartDate(response.data.start_date)
                setDueDate(response.data.due_date)
            }).catch((error) => {
                catchError(error);
            });
    }

    async function updateData() {
        await api.put(`/tasks/${taskId}/`, {
            name, 
            description,
            status,
            start_date: startDate,
            due_date: dueDate
        })
            .then((response) => {
                navigate('/tasks/')
            }).catch((error) => {
                catchError(error);
            });
    }

    useEffect(() => {
        fetchData()
    }, [taskId]);

    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            updateData()
        } catch (error) {
            catchError(error)
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
                    <Typography component="h1" variant="h5">
                        Edit Password
                    </Typography>
                    {otherErrors && Object.values(otherErrors).map((errorMessage) => {
                        return (
                            <div className="alert alert-danger w-100">{errorMessage}</div>
                        )
                    })}

                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                {fieldErrors.name && (<div className="text-danger w-100">{fieldErrors.name}</div>)}
                                <TextField required fullWidth type="text" label="Name" name="name" value={name} onChange={(event) => setName(event.target.value)} />
                            </Grid>
                            <Grid item xs={12}>
                                {fieldErrors.description && (<div className="text-danger w-100">{fieldErrors.description}</div>)}
                                <TextField required fullWidth type="text" label="Description" name="description" value={description} onChange={(event) => setDescription(event.target.value)} />
                            </Grid>
                            <Grid item xs={12}>
                                {fieldErrors.status && (<div className="text-danger w-100">{fieldErrors.status}</div>)}
                                <NativeSelect required fullWidth type="text" label="Status" name="status" value={status} onChange={(event) => setStatus(event.target.value)}>
                                    <option value='not-started'>not-started</option>
                                    <option value='in-progress'>in-progress</option>
                                    <option value='in-review'>in-review</option>
                                    <option value='suspended'>suspended</option>
                                    <option value='completed'>completed</option>
                                </NativeSelect>
                            </Grid>

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

                        </Grid>
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}> Edit </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
