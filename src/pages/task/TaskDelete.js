import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../components/api";


export default function TaskDelete() {
    const { taskId } = useParams();
    
    const navigate = useNavigate()

    async function fetchData() {
        await api.delete(`/tasks/${taskId}/`)
    }

    useEffect(() => {
        fetchData()
        navigate(`/teams/`)
    }, [taskId]);
}
