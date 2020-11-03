import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import TaskCreate from './task_manager_components/TaskCreate';

const App = () => {
  const componentOne = () => {
    return <div>This is the main page</div>;
  };

  const componentTwo = () => {
    return <div>This is the about page</div>;
  };

  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={componentOne} />
        <Route path="/about" exact component={componentTwo} />
        <Route path="/create" exact component={TaskCreate} />
      </div>
    </BrowserRouter>
  );
}

export default App;
