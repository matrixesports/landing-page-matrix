import React from 'react';
import FadeIn from 'react-fade-in';
import $ from "jquery";
import { Link } from "react-router-dom";
import axios from 'axios';

class Home extends React.Component {
  constructor(props)
  {
    super(props);
    $('html, body').animate({ scrollTop: 0 }, 'fast');


  }


  addEmailToWaitlist = (e) => {
    e.preventDefault();
    var body = {
        email: document.getElementById('email_input').value,
        api_key: 'OUEH0D',
        referral_link: window.location.href
    };

    axios.post('https://www.getwaitlist.com/waitlist', body)
      .then((response) => {
          console.log(response)
          var registered_email = response['data']['registered_email'];
      })
      .catch((error) => {
          this.setState({error_info: 'Some error occured unfortunately. Check your value or let me know: bani (at) banisingh.io'})
          console.log(error.response)
      });
  }

  render() {
    return (
      <div>
        <FadeIn delay={200}>
          <div className="jumbotron text-white rounded-0" style={{ background: "#1c1b1b", margin: "0 auto" }}>
              <h1 className="display-4" style={{ fontFamily: "Raleway", fontWeight: "500" }}>Become An XSparK Owner</h1>
              <p style={{ fontFamily: "Inter" }}>Recieve a portion of any XSparK prize pool</p>
              <div style={{ width: "100%", margin: "0 auto", height: "50px" }}>
                <hr style={{ width: "30%", float: "left", minWidth: "100px", height: "2px", backgroundColor: "white" }} />
              </div>
              <p style={{ textAlign: "left", fontFamily: "Inter"}}>Earn additional XSparK ownership by completing tasks</p>
              <div style={{ width: "100%", margin: "0 auto", height: "50px" }}>
                <hr style={{ width: "30%", float: "left", minWidth: "100px", height: "2px", backgroundColor: "white" }} />
              </div>
              <p style={{ textAlign: "left", fontFamily: "Inter" }} >Trade and send ownership tokens with other fans</p>
              <div style={{ width: "100%", margin: "0 auto", height: "50px" }}>
                <hr style={{ width: "30%", float: "left", minWidth: "100px", height: "2px", backgroundColor: "white" }} />
              </div>
              <div className="lead">
                <div className="container">
                  <div className="row">
                    <div className="col text-center">
                      <div className="group">
                        <input type="text" placeholder={"ENTER EMAIL"} id="email_input"/>
                        <span className="highlight" />
                        <span className="bar" />
                        <label></label>
                      </div>

                      <a className="btn btn-mycolor btn-lg rounded-0 text-center" href="/" role="button" style={{ width: "100%", fontSize: "23px", fontFamily: 'Cabin' }} onClick={(e) => this.addEmailToWaitlist(e) }>JOIN WAITLIST</a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div style={{ background: "#1c1b1b"}}>
              <img src={require("../images/Vector.png")} style={{ width: "100%" }} />
          </div>
        </FadeIn>
      </div>
    );
  }
}

export default Home;
