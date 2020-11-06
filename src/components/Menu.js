import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {
  const renderLinks = () => {
    return props.links.map((link, index) => {
      return (
        <Link
          to={link.path}
          className={window.location.pathname === link.path ? 'item active' : 'item'}
          key={index}
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

