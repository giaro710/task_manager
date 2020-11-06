import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {

  const [ activeIndex, setActiveIndex ] = useState(null);

  const menuItemClick = (index) => {
    setActiveIndex(index);
  }

  const renderLinks = () => {
    return props.links.map((link, index) => {
      return (
        <Link
          to={link.path}
          onClick={() => menuItemClick(index)}
          className={activeIndex === index ? "active item" : "item"}
          key={index}
        >
          {link.label}
        </Link>
      );
    });
  };

  // const renderLinks = () => {
  //   return props.links.map((link, index) => {
  //     return (
  //       <Link
  //         to={link.path}
  //         onClick={() => console.log(location.pathname)}
  //         className={location.pathname === link.path ? 'item active' : 'item'}
  //         key={index}
  //       >
  //         {link.label}
  //       </Link>
  //     );
  //   })
  // }

  return (
    <div className="ui container">
      <div className="ui three item menu">
        {renderLinks()}
      </div>
    </div>
  );
}

export default Menu;

