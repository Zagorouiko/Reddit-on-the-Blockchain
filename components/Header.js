import React, { Component } from 'react';
import { Menu, Search } from 'semantic-ui-react';
import { Link } from '../routes';
import { metamaskStatus } from '../ethereum/web3';

class Header extends Component {

  state = {
    route: '',
    createRoute: ''
  };

  componentWillMount() {
    if(metamaskStatus == true) {
      this.setState({ route: '/' })
      this.setState({ createRoute: '/posts/new' })
    } else {
      this.setState({ route: '/NoMetamask'})
      this.setState({ createRoute: '/NoMetamask' })
    }
  }

  render() {
  return (
    <Menu style={{ fontSize: "20px", marginTop: "0px", opacity: 0.85  }}>

    <img src="/reddit-logo.png" style={{width: "150px", padding: "10px"}} />

      <Link route={this.state.route}>
        <a className="item" style={{fontFamily: 'Noto Sans', paddingLeft: "0px", paddingBottom: "8px"}}>on The Blockchain</a>
      </Link>
    <Menu.Menu position="right">
    <Link route={this.state.createRoute}>
      <a className="item">+</a>
    </Link>

    </Menu.Menu>
  </Menu>
  );
  }
};

export default Header;
