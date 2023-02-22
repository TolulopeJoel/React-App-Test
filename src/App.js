import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import TaskDetail from './components/TaskDetail.js';
import AllTasks from './components/AllTasks.js';


// function TaskDetailWrapper(props) {
//   const taskId = useParams()
//   console.log(taskId)
//   const task = tasks.find(task => task.id === taskId);
//   return task ? <TaskDetail {...task} {...props} /> : <div>Task not found</div>;
// }


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AllTasks />} />
        {/* <Route path="/tasks/:taskId" element={<TaskDetailWrapper />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
