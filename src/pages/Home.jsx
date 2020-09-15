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

    this.state = {
        value: '',
        priority_number: '',
        email_submitted: '',
        ref_link: '',
        error_info: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
    var body = {
        email: this.state.value,
        api_key: 'OUEH0D',
        referral_link: window.location.href
    };

    axios.post('https://www.getwaitlist.com/waitlist', body)
      .then((response) => {
          console.log(response)
          var registered_email = response['data']['registered_email']
          var current_priority = response['data']['current_priority']
          var referral_link = response['data']['referral_link']
          this.setState({
              email_submitted: registered_email,
              priority_number: current_priority,
              ref_link: referral_link
          });
      })
      .catch((error) => {
          this.setState({error_info: 'Some error occured unfortunately. Check your value or let me know'})
          console.log(error.response);
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
                        <input type="text" placeholder={"ENTER EMAIL"} onChange={(e) => handleChange(e.target.value)}  />
                        <span className="highlight" />
                        <span className="bar" />
                        <label></label>
                      </div>

                      <a className="btn btn-mycolor btn-lg rounded-0 text-center" href="/" role="button" style={{ width: "100%", fontSize: "23px", fontFamily: 'Cabin' }} onClick={(e) => handleSubmit(e.target.value) }>JOIN WAITLIST</a>
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
