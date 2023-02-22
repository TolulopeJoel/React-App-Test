import React, { Component } from "react";
import axios from "axios";

class AllTasks extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
  }

  componentDidMount() {
    axios.get('/api/tasks')
      .then(response => this.setState({ tasks: response.data }))
      .catch(error => console.log(error));
  }

  render() {
    const { tasks } = this.state;
    console.log(tasks);
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
            {tasks.map(task => (
              <a href={`/tasks/${task.id}`}>
                <tr key={task.id}>
                  <td className="task-title"><a href={`/tasks/${task.id}`}>{task.title}</a></td>
                  <td>{task.description.substring(0, 20)}...</td>
                  <td>{task.due_date}</td>
                  <td>{task.assignee}</td>
                  <td className={`status ${task.status}`}>{task.status}</td>
                </tr>
              </a>
            ))};
          </tbody>
        </table>
        <a href="/tasks/new" className="create-button">Create New Task</a>

        {/* calendar view of tasks */}
        {/* Include the contents of the "calendar.html" template directly in this component */}
        {/* Replace any Django template variables with JavaScript variables or props */}
        {/* Example: {% url 'task_detail' task.id %} becomes `/tasks/${task.id}` */}
        <div dangerouslySetInnerHTML={{
          __html: `
          <h2>Calendar View</h2>
          ... contents of calendar.html template go here ...
        `}} />
      </div>
    );
  }
}

export default AllTasks;