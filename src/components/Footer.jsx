import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer font-small stylish-color-dark" style={{backgroundColor: '#E8D0A7', marginTop: '0px', height: "40px", fontFamily: "Inter",position:'relative',zIndex:'1000',padding:10}}>
            <span style={{ float: "left"}}>
              Powered by Matrix
            </span>
            <span style={{ float: "right"}}>
              <a href="https://discord.gg/5kpA6vg" style={{ paddingRight: "5px" }}>
              Discord
              </a>
              |
              <a href="https://instagram.com/teamx_spark" style={{ paddingLeft: "5px" }}>
               Instagram
              </a>
            </span>
      </footer>
    );
  }
}

export default Footer;
