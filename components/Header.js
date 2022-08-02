import React, { Component } from 'react';
import { Menu, Search } from 'semantic-ui-react';
import { Link } from '../routes';

//Anything inside Link gets a click event added
const Header = (props) => {
  return (
    <Menu style={{ fontSize: "20px", marginTop: "0px"  }}>
    <img src="/reddit-logo.png" style={{width: "150px", padding: "10px"}} />
      <Link route="/">
        <a className="item" style={{fontFamily: 'Noto Sans', paddingLeft: "0px", paddingBottom: "8px"}}>on The Blockchain</a>
      </Link>
    <Menu.Menu position="right">
    <Search fluid style={{ padding: "10px"  }}/>
    <Link route="/posts/new">
      <a className="item">+</a>
    </Link>

    </Menu.Menu>
  </Menu>
  );
};

export default Header;
