import axios from "axios";

const API_URL = "http://localhost:8000/api/";

const getAuthHeader = () => {
  const token = localStorage.getItem("access_token");
  return { Authorization: `Bearer ${token}` };
};
console.log(getAuthHeader());

class TaskService {
  getAllTasks() {
    return axios.get(API_URL + "tasks/", { headers: getAuthHeader() });
  }

  getTaskById(id) {
    return axios.get(API_URL + "tasks/" + id + "/", { headers: getAuthHeader() });
  }

  createTask(data) {
    return axios.post(API_URL + "tasks/", data, { headers: getAuthHeader() });
  }

  updateTask(id, data) {
    return axios.put(API_URL + "tasks/" + id + "/", data, { headers: getAuthHeader() });
  }

  deleteTask(id) {
    return axios.delete(API_URL + "tasks/" + id + "/", { headers: getAuthHeader() });
  }
}

export default new TaskService();