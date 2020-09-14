import React from 'react';
import $ from "jquery";
import {
  Link,
} from "react-router-dom";



class Navbar extends React.Component {
  constructor(props)
  {
    super(props);

  }



  render() {



    return (
      <nav className="navbar navbar-dark bg-dark custom-bg">
        <a className="navbar-brand" href="/">
          <img src={ require("../images/Xspark.png") } width={30} height={30} className="d-inline-block align-top" alt="" />
          Team XSparK
        </a>
      </nav>
    );
  }
}

 export default Navbar;
