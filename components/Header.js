import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';
import redditImg from '../public/images/reddit.png';

//Anything inside Link gets a click event added
const Header = (props) => {
  return (
    <Menu style={{ fontSize: "20px"  }}>

      <Link route="/">
        <a className="item">Reddit on The Blockchain</a>
      </Link>

    <Menu.Menu position="right">
    <Link route="/posts/new">
      <a className="item">+</a>
    </Link>

    </Menu.Menu>
  </Menu>
  );
};

export default Header;
