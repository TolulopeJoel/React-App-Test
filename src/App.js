import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskDetail from './pages/task/TaskDetail';
import TaskList from './pages/task/TaskList';
import TaskCreate from './pages/task/TaskCreate';
import CreateTeam from './pages/team/TeamCreate';
import SignIn from './components/Auth/SignIn';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<TaskList />} />
        <Route path="/tasks/:taskId" element={<TaskDetail />} />
        <Route path="/tasks/new" element={<TaskCreate />} />
        <Route path="/teams/new" element={<CreateTeam />} />
        <Route path="/login" element={<SignIn />} />
        {/* <Route path="/tasks/:taskId/delete" element={<TaskDelete />} />
        <Route path="/tasks/:taskId/edit" element={<TaskEdit />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
