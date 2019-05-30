import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from './components/Profile';
import HomePage from './pages/HomePage';
import "./style.css";




class App extends Component {

  constructor(){
    super() 
     this.state = {
       number: '0'
     }
    this.handleNumberChosen = this.handleNumberChosen.bind(this);
  }

  handleNumberChosen(number) {
    console.log("working", number)
    this.setState({
      number: number
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Wrapper number={this.state.number}>
          <Route exact path="/" component={HomePage} />
          
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={()=> <Profile newNumberChosen={this.handleNumberChosen} />} />
          
          </Wrapper>
        </div>
    </Router>
  );  
}
}

export default App;
