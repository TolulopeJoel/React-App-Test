import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './components/Auth/SignIn';

import TaskList from './pages/task/TaskList';
import TaskDetail from './pages/task/TaskDetail';
import TaskCreate from './pages/task/TaskCreate';

import TeamList from './pages/team/TeamList';
import TeamDetail from './pages/team/TeamDetail';
import TeamCreate from './pages/team/TeamCreate';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/tasks/:taskId" element={<TaskDetail />} />
        <Route path="/tasks/new" element={<TaskCreate />} />

        <Route index element={<TeamList />} />
        <Route path="/teams/:teamId" element={<TeamDetail />} />
        <Route path="/teams/new" element={<TeamCreate />} />

        <Route path="/login" element={<SignIn />} />
        {/* <Route path="/tasks/:taskId/delete" element={<TaskDelete />} />
        <Route path="/tasks/:taskId/edit" element={<TaskEdit />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
