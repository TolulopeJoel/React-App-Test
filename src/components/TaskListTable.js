import React from "react";

export default function TaskListTable({ tasks }) {
    return (
        <table className="table table-bordered table-hover my-5">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Description</th>
                    <th>Due Date</th>
                    <th>Assignees</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <tr key={task.id}>
                        <td className="task-title">
                            <a href={`/tasks/${task.id}`}>{task.name}</a>
                        </td>
                        <td>{task.description.substring(0, 20)}...</td>
                        <td>{new Date(task.due_date).toDateString()}</td>
                        <td className="task-assignee">
                            {task.assignees &&
                                task.assignees.map((assignee) => (
                                    <span>{assignee.username}. </span>
                                ))}
                        </td>
                        <td className={`status ${task.status}`}>{task.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
