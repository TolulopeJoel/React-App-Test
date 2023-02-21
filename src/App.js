import React, { Component } from "react";
// import Modal from "./components/Modal";
import "./Task.css";
import ReactDOM from 'react-dom/client';
import TaskDetail from './components/TaskDetail.js';
import AllTasks from './components/AllTasks.js';
// import Welcome from './components/TaskDetail.js'
// import { AllTasks } from './components/AllTasks'


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       viewCompleted: false,
//       // todoList: todoItems,
//       modal: false,
//       activeItem: {
//         title: "",
//         description: "",
//         completed: false,
//       },
//     };
//   }

//   toggle = () => {
//     this.setState({ modal: !this.state.modal });
//   };

//   handleSubmit = (item) => {
//     this.toggle();

//     alert("save" + JSON.stringify(item));
//   };

//   handleDelete = (item) => {
//     alert("delete" + JSON.stringify(item));
//   };

//   createItem = () => {
//     const item = { title: "", description: "", completed: false };

//     this.setState({ activeItem: item, modal: !this.state.modal });
//   };

//   editItem = (item) => {
//     this.setState({ activeItem: item, modal: !this.state.modal });
//   };


//   displayCompleted = (status) => {
//     if (status) {
//       return this.setState({ viewCompleted: true });
//     }

//     return this.setState({ viewCompleted: false });
//   };

//   renderTabList = () => {
//     return (
//       <div className="nav nav-tabs">
//         <span
//           className={this.state.viewCompleted ? "nav-link active" : "nav-link"}
//           onClick={() => this.displayCompleted(true)}
//         >
//           Complete
//         </span>
//         <span
//           className={this.state.viewCompleted ? "nav-link" : "nav-link active"}
//           onClick={() => this.displayCompleted(false)}
//         >
//           Incomplete
//         </span>
//       </div>
//     );
//   };

//   renderItems = () => {
//     const { viewCompleted } = this.state;
//     const newItems = this.state.todoList.filter(
//       (item) => item.completed == viewCompleted
//     );

//     return newItems.map((item) => (
//       <li
//         key={item.id}
//         className="list-group-item d-flex justify-content-between align-items-center"
//       >
//         <span
//           className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo" : ""
//             }`}
//           title={item.description}
//         >
//           {item.title}
//         </span>
//         <span>
//           <button
//             className="btn btn-secondary mr-2"
//             onClick={() => this.editItem(item)}
//           >
//             Edit
//           </button>
//           <button
//             className="btn btn-danger"
//             onClick={() => this.handleDelete(item)}
//           >
//             Delete
//           </button>
//         </span>
//       </li>
//     ));
//   };

//   render() {
//     return (
//       <main className="container">
//         <></>
//         <h1 className="text-white text-uppercase text-center my-4"></h1>
//         <div className="row">
//           <div className="col-md-6 col-sm-10 mx-auto p-0">
//             <div className="card p-3">
//               <div className="mb-4">
//                 <button
//                   className="btn btn-primary"
//                   onClick={this.createItem}
//                 >
//                   Add task
//                 </button>
//               </div>
//               {this.renderTabList()}
//               <ul className="list-group list-group-flush border-top-0">
//                 {this.renderItems()}
//               </ul>
//             </div>
//           </div>
//         </div>
//         {this.state.modal ? (
//           <Modal
//             activeItem={this.state.activeItem}
//             toggle={this.toggle}
//             onSave={this.handleSubmit}
//           />
//         ) : null}
//       </main>
//     );
//   }
// }

// function AllTasks() {
//   const tasks = [{ // Replace this array with the actual list of tasks from your backend
//     id: 1,
//     name: 'Task 1',
//     description: 'Task description goes here',
//     due_date: '2023-02-28',
//     assignee: 'John Doe',
//     status: 'not-started',
//   }, {
//     id: 2,
//     name: 'Task 2',
//     description: 'Task description goes here',
//     due_date: '2023-03-05',
//     assignee: 'Jane Smith',
//     status: 'completed',
//   }];

//   return (
//     <section className="container">
//       <div className="my-5">
//         <h1>All Tasks</h1>
//         <table className="table my-5">
//           <thead>
//             <tr>
//               <th>Task</th>
//               <th>Description</th>
//               <th>Due Date</th>
//               <th>Assignee</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           {tasks.map((task) => (
//             <tbody>
//               <tr key={task.id}>
//                 <td className="p-4 border border-2 border-light text-start text-decoration-none"><a href={`/tasks/${task.id}`}>{task.name}</a></td>
//                 <td className="p-4 border border-2 border-light text-start">{task.description.substring(0, 20)}...</td>
//                 <td className="p-4 border border-2 border-light text-start">{task.due_date}</td>
//                 <td className="p-4 border border-2 border-light text-start">{task.assignee}</td>
//                 <td className="p-4 border border-2 border-light text-start {`status ${task.status}`}">{task.status}</td>
//               </tr>
//             </tbody>
//           ))}
//         </table>

//         <a href="/tasks/new" className="create-button">Create New Task</a>

//         {/* calendar view of tasks */}
//         {/* Include the contents of the "calendar.html" template directly in this component */}
//         {/* Replace any Django template variables with JavaScript variables or props */}
//         {/* Example: {% url 'task_detail' task.id %} becomes `/tasks/${task.id}` */}
//       </div>
//       <div dangerouslySetInnerHTML={{
//           __html: `
//         <h2>Calendar View</h2>
//         ... contents of calendar.html template go here ...
//       `}} />
//     </section>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const element = <TaskDetail />;
// root.render(element);


const task = {
  id: 1,
  name: 'Spit',
  description: 'Task description goes here',
  due_date: '2023-02-28',
  assignee: 'John Doe',
  status: 'not-started',
}


function App() {
  return (
    <div>
      <div>
        <TaskDetail task={task} />
      </div>
      
      <div>
        <AllTasks />
      </div>
    </div>
  );
}

export default App;
