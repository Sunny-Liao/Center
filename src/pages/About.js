import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "../utils/API";
import { Link } from "react-router-dom";
import bgImage from './center.jpg';
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";


var sectionStyle = {
  backgroundImage:`url(${bgImage})`
};

//where Google User Authentication Add On

class App extends Component {
  render() {
    return(
      <div className="App">
      <Navbar />
      <Route exact path="/about" component={Landing} />
      <div className="container">
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="profile" component={Profile} />
      </div>

      </div>
    );
  }
}

export default App;

//
