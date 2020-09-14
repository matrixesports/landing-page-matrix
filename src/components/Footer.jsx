import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer font-small stylish-color-dark" style={{backgroundColor: '#E8D0A7', marginTop: '0px', height: "40px"}}>
            <span style={{ float: "left"}}>
              Powered by Matrix
            </span>
            <span style={{ float: "right"}}>
              <a href="discord.com" style={{ paddingRight: "5px" }}>
              Discord
              </a>
              |
              <a href="instagram.com" style={{ paddingLeft: "5px" }}>
               Instagram
              </a>
            </span>
      </footer>
    );
  }
}

export default Footer;
