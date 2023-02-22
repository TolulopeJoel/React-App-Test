import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskDetail from './components/TaskDetail.js';
import AllTasks from './components/AllTasks.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AllTasks />} />
        <Route path="/tasks/:taskId" element={<TaskDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
