import React from 'react';

function TaskDetail(props) {
  const { task } = props;

  return (
    <div>
      <h1 className="page-title">{task.name} Detail</h1>

      <div className="notion-detail-view">
        <div className="task-header">
          <h1 className="task-name">{task.name}</h1>
          <div className={`task-status ${task.status}`}>{task.status}</div>
        </div>
        <div className="task-details">
          <div className="task-description">
            <h2>Description</h2>
            <p>{task.description}</p>
          </div>
          <div className="task-due-date">
            <h2>Due Date</h2>
            <p>{task.due_date}</p>
          </div>
          <div className="task-assignee">
            <h2>Assignee</h2>
            <p>{task.assignee}</p>
          </div>
        </div>
        <div className="task-actions">
          <a href={`/tasks/${task.id}/edit`} className="edit-button">Edit</a>
          <a href={`/tasks/${task.id}/delete`} className="delete-button">Delete</a>
        </div>
      </div>
    </div>
  );
}



export default TaskDetail;
