import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import TaskCreate from './task_manager_components/TaskCreate';
import TaskList from './task_manager_components/TaskList';

const App = () => {
  const componentOne = () => {
    return (
      <div>
        <h1>Main Page</h1>
        <Link to='/create'>Crea un task</Link>
      </div>
    );
  };

  const componentTwo = () => {
    return <div>This is the about page</div>;
  };

  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={TaskList} />
        <Route path="/about" exact component={componentTwo} />
        <Route path="/create" exact component={TaskCreate} />
      </div>
    </BrowserRouter>
  );
}

export default App;
