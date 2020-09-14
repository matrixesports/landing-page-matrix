import React from 'react';
import FadeIn from 'react-fade-in';
import $ from "jquery";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props)
  {
    super(props);
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  }


  render() {
    return (
      <div>
        <FadeIn delay={200}>
          <div className="jumbotron text-white rounded-0" style={{ background: "#1c1b1b", margin: "0 auto" }}>
              <h1 className="display-4">Become An XSparK Owner</h1>
              <p>Recieve a portion of any XSparK prize pool</p>
              <div style={{ width: "100%", margin: "0 auto", height: "50px" }}>
                <hr style={{ width: "30%", float: "left", minWidth: "100px", height: "2px", backgroundColor: "white" }} />
              </div>
              <p style={{ textAlign: "left"}}>Earn additional XSparK ownership by completing tasks</p>
              <div style={{ width: "100%", margin: "0 auto", height: "50px" }}>
                <hr style={{ width: "30%", float: "left", minWidth: "100px", height: "2px", backgroundColor: "white" }} />
              </div>
              <p style={{ textAlign: "left"}}>Trade and send ownership tokens with other fans</p>
              <div style={{ width: "100%", margin: "0 auto", height: "50px" }}>
                <hr style={{ width: "30%", float: "left", minWidth: "100px", height: "2px", backgroundColor: "white" }} />
              </div>
              <p className="lead">
                <div className="container">
                  <div className="row">
                    <div className="col text-center">
                      <div className="group">
                        <input type="text" placeholder={"ENTER EMAIL"} />
                        <span className="highlight" />
                        <span className="bar" />
                        <label></label>
                      </div>

                      <a className="btn btn-mycolor btn-lg rounded-0 text-center" href="/" role="button" style={{ width: "100%", fontSize: "23px" }}>JOIN WAITLIST</a>
                    </div>
                  </div>
                </div>
              </p>

          </div>
        </FadeIn>
      </div>
    );
  }
}

export default Home;
