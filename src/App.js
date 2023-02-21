import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskDetail from './components/TaskDetail.js';
import AllTasks from './components/AllTasks.js';


const task = {
  id: 1,
  name: 'Spit',
  description: 'Task description goes here',
  due_date: '2023-02-28',
  assignee: 'John Doe',
  status: 'not-started',
}

function TaskDetailWrapper(props) {
  const taskProps = { task };
  return <TaskDetail {...taskProps} {...props} />;
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AllTasks />} />
        <Route path="/hello" element={<TaskDetailWrapper />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
