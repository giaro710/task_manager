import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addTask } from '../../actions';

class TaskCreate extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    this.props.addTask({ name: form.elements[0].value, done: false });
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui header">
          <h2>Create a task</h2>
        </div>


        <form onSubmit={this.handleSubmit} className="ui fluid form">
          <div className="field">
            <input name='taskName' type="text" placeholder="Type..." autoComplete="off" />
            <div className="ui pointing label">
              Insert here the task's name
            </div>
          </div>
          <button className="ui button">Submit</button>
        </form>

        <Link to="/">Back to all tasks</Link>

      </div>
    )
  }
}


export default connect(null, { addTask })(TaskCreate);
