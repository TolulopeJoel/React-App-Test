import React from 'react';

function AllTasks() {
  const tasks = [{ // Replace this array with the actual list of tasks from your backend
    id: 1,
    name: 'Task 1',
    description: 'Task description goes here',
    due_date: '2023-02-28',
    assignee: 'John Doe',
    status: 'not-started',
  }, {
    id: 2,
    name: 'Task 2',
    description: 'Task description goes here',
    due_date: '2023-03-05',
    assignee: 'Jane Smith',
    status: 'completed',
  }];

  return (
    <div className="container">
      <h1>All Tasks</h1>
      <table className="tasks-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Assignee</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <a href={`/tasks/${task.id}`}>
              <tr key={task.id}>
                <td className="task-title"><a href={`/tasks/${task.id}`}>{task.name}</a></td>
                <td>{task.description.substring(0, 20)}...</td>
                <td>{task.due_date}</td>
                <td>{task.assignee}</td>
                <td className={`status ${task.status}`}>{task.status}</td>
              </tr>
            </a>
          ))}
        </tbody>
      </table>
      <a href="/tasks/new" className="create-button">Create New Task</a>
      <TaskDetail />

      {/* calendar view of tasks */}
      {/* Include the contents of the "calendar.html" template directly in this component */}
      {/* Replace any Django template variables with JavaScript variables or props */}
      {/* Example: {% url 'task_detail' task.id %} becomes `/tasks/${task.id}` */}
      <div dangerouslySetInnerHTML={{ __html: `
        <h2>Calendar View</h2>
        ... contents of calendar.html template go here ...
      `}} />
    </div>
  );
}

export default AllTasks;
