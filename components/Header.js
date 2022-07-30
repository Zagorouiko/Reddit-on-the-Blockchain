import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

//Anything inside Link gets a click event added
const Header = (props) => {
  return (
    <Menu style={{ marginTop: "10px", fontSize: "35px"  }}>

      <Link route="/">
        <a className="item">Reddit on The Blockchain</a>
      </Link>

    <Menu.Menu position="right">
    <Link route="/">
      <a className="item">Post</a>
    </Link>

    <Link route="/posts/new">
      <a className="item">+</a>
    </Link>

    </Menu.Menu>
  </Menu>
  );
};

export default Header;
