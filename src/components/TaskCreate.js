import React, { Component } from "react";
import axios from "axios";

class TaskCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      due_date: "",
      assignee: "",
      status: "in-progress",
      error: null,
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/tasks/", this.state)
      .then((response) => {
        this.props.history.push(`/tasks/${response.data.id}`);
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  };

  render() {
    return (
      <div className="container">
        <h1>Create Task</h1>
        {this.state.error && (
          <div className="alert alert-danger">{this.state.error}</div>
        )}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="3"
              value={this.state.description}
              onChange={this.handleInputChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="due_date">Due Date</label>
            <input
              type="date"
              className="form-control"
              id="due_date"
              name="due_date"
              value={this.state.due_date}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="assignee">Assignee</label>
            <input
              type="text"
              className="form-control"
              id="assignee"
              name="assignee"
              value={this.state.assignee}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    );
  }
}

export default TaskCreate;
