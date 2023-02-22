import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskDetail from './components/TaskDetail.js';
import TaskList from './components/TaskList';
import TaskCreate from './components/TaskCreate';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<TaskList />} />
        <Route path="/tasks/:taskId" element={<TaskDetail />} />
        <Route path="/tasks/new" element={<TaskCreate />} />
        {/* <Route path="/tasks/:taskId/delete" element={<TaskDelete />} />
        <Route path="/tasks/:taskId/edit" element={<TaskEdit />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
