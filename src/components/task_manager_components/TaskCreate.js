import React from 'react';

class TaskCreate extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui header">
          <h2>Create a task</h2>
        </div>


        <form className="ui fluid form">
          <div className="field">
            <input type="text" placeholder="Type..." />
            <div className="ui pointing label">
              Insert here the task's name
            </div>
          </div>
        </form>

      </div>


    )
  }
}

export default TaskCreate;
