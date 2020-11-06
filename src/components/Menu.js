import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {

  const [ active, setActive ] = useState(false);

  const toggleClass = () => {
    const currentState = active;
    setActive(!currentState);
  }

  const renderLinks = () => {
    return props.links.map((link, index) => {
      return (
        <Link
          onClick={() => toggleClass()}
          to={link.path}
          className={`item ${active ? "active" : ""}`}
          key={link.index}
        >
          {link.label}
        </Link>
      );
    })
  }

  return (
    <div className="ui container">
      <div className="ui three item menu">
        {renderLinks()}
      </div>
    </div>
  );
}

export default Menu;
