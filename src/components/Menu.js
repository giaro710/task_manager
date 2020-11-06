import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

  const [ active, setActive ] = useState(false);

  return (
    <div className="ui container">
      <div className="ui three item menu">
        <Link onClick={() => setActive(true)} to="/" className={`item ${active ? 'active' : ''}`}>
          Task Manager
        </Link>
        <Link onClick={() => setActive(true)} to="/posts" className={`item ${active ? 'active' : ''}`}>
          Posts
        </Link>
        <Link onClick={() => setActive(true)} to="/posts" className={`item ${active ? 'active' : ''}`}>
          Posts
        </Link>
      </div>
    </div>
  );
}

export default Menu;
