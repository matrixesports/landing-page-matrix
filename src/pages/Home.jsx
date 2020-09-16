import React, {useEffect,useState} from 'react';
import FadeIn from 'react-fade-in';
import $ from "jquery";
import { Link } from "react-router-dom";
import axios from 'axios';
import cogoToast from 'cogo-toast'
import './Home.css'

const Home = ()=>{
  const [confirmedEmail,setConfirmedEmail] = useState(null)

  useEffect(()=>{
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  },[])


  const addEmailToWaitlist = (e) => {
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
          setConfirmedEmail(registered_email);
      })
      .catch((error) => {
          document.getElementById('email_input').value = '';
          cogoToast.error('Some error occured unfortunately. Check your value or let me know: bani (at) banisingh.io')
          console.log(error.response)
      });
  }

    return (
      <>
      <div>
        <FadeIn delay={200} style={{height:'100%',position:'relative'}}>
          <div style={{position:'relative',minHeight:'100vh'}}>
            <div className="jumbotron text-white rounded-0 " style={{ background: "#1c1b1b", margin: "0 auto", position:'relative',minHeight:'100vh',zIndex:'1000'}}>
              <div style={{position:'relative',zIndex:'100'}}>
                {!confirmedEmail&&<><h1 className="display-4" style={{ fontFamily: "Raleway", fontWeight: "500"}}>Become An XSparK Owner</h1>
                <p style={{ fontFamily: "Inter"}}>Recieve a portion of any XSparK prize pool</p>
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

                        <div className="btn btn-mycolor btn-lg rounded-0 text-center joinButton" role="button" style={{ width: "100%", fontSize: "23px", fontFamily: 'Cabin',zIndex:'100',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}} onClick={(e) => addEmailToWaitlist(e) }>JOIN WAITLIST</div>
                      </div>
                    </div>
                  </div>
                </div></>}
                
              </div>
              <div style={{ width:'100%',position:'absolute',bottom:0,left:0,zIndex:'10'}} className='d-block d-lg-none'>
                <img src={require("../images/Graphic.svg")} style={{ width: "100%",position:'relative',zIndex:'0'}} />
              </div>
              <div style={{ width:'100%',position:'absolute',bottom:-300,left:0,zIndex:'10'}} className='d-none d-lg-block'>
                <img src={require("../images/Graphic.svg")} style={{ width: "100%",position:'relative',zIndex:'0'}} />
              </div>
            </div>
            
          </div>
        </FadeIn>
        {confirmedEmail&&<>
          <div className='text-center mt-5 fadeIn' style={{fontFamily:'Inter',position:'absolute',top:'50%',left:'50%',width:'90%',zIndex:'1000',transform:'translate(-50%,-50%)'}}>
            <h1 style={{color:'white'}}>Thank you!</h1>
            <p className='text-secondary'>Your email {confirmedEmail} had been added to our waitlist.</p>
          </div>
        </>}
      </div>
    </>);
}

export default Home;
