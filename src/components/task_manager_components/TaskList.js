import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../style.css';

import { taskDone } from "../../actions";

class TasksList extends React.Component {

  pushDone = (task) => {
    this.props.taskDone(task);
  }

  taskRender = (tasks) => {
    if (tasks.length > 1) {
      const doneClass = ''
      return tasks.map((task) => {
        return (
          <div
            className={`ui segment ${task.done ? "done" : ""}`}
            key={task.name}
          >
            <p>
              {task.name} - {task.done ? "Done" : "To do"}
            </p>
            <button
              onClick={() => this.pushDone(task)}
              className={`${
                task.done ? "ui button" : "ui positive basic button"
              }`}
            >
              {task.done ? "Set as to do" : "Mark as done"}
            </button>
          </div>
        );
      });
    }

    return  (
      <div>
        <p> Any task yet</p>
        <Link to="/create">Create a task</Link>
      </div>
    )

  }

  render() {
    return (
      <div>
        <div className="ui container grid" style={{ marginTop: "40px" }}>
          <h1 className="header">Task Manager</h1>
          <Link to="/create">Create a task</Link>
          <div className="row">
            <div className="column four wide">
              {this.taskRender(this.props.tasks)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return { tasks: state.tasks.tasks };
}

export default connect(mapStateToProps, { taskDone })(TasksList);
