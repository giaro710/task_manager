import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import TaskCreate from './task_manager_components/TaskCreate';
import TaskList from './task_manager_components/TaskList';
import PostList from './posts_components/PostList';
import Menu from './Menu';
import About from './About';


const App = () => {

  const menuLinks = [
    { label: 'Task Manager', path: '/' },
    { label: 'Posts', path: '/posts' },
    { label: 'About', path: '/about' }
  ];

  return (
    <BrowserRouter>
      <div>
        <Menu links={menuLinks} />
        <Route path="/" exact component={TaskList} />
        {/* <Route path="/about" exact component={componentTwo} /> */}
        <Route path="/create" exact component={TaskCreate} />

        <Route path="/posts" exact component={PostList} />
        <Route path="/about" exact component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;
