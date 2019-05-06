import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import bgImage from './center.jpg';
import Wrapper from "../components/Wrapper";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";


var sectionStyle = {
  backgroundImage:`url(${bgImage})`
};

//where Google User Authentication Add On

class Welcome extends Component {
  render() {
    return(
      <div className="row" id="Body">
        <div className="medium-12 columns">
          <h2 id="welcomeText">Make People fall in love iwth your ideas</h2>

          <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    //onSuccess={responseGoogle}
    //onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
          
          <FacebookLogin
    appId="456651078432897"
    autoLoad={true}
    fields="name,email,picture"
    //onClick={componentClicked}
    //callback={responseFacebook} 
    />
        </div>
      </div>
    );
  }
}

export default Welcome;

//

