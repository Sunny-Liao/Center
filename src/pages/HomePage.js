import React from "react";
import EnterBtn from "../components/EnterBtn";
import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <Wrapper>
      <video autoPlay muted id="myVideo">
        <source src={require('./tree.mp4')} type="video/mp4" />
      </video>
      <Link to="/about">
        <EnterBtn className="enterButton">Enter</EnterBtn>
      </Link>
    </Wrapper>


  )
}



export default HomePage;
