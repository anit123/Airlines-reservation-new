import React, { Component } from "react";
import styled from "styled-components";
import Login from "./Login";

class Signup extends Component {
  render() {
    return (
      <SignupStyled>
        <div className="img">
          <Login />
        </div>
      </SignupStyled>
    );
  }
}

const SignupStyled = styled.div`
  .img {
    background-image: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 0%,
      rgba(0, 212, 255, 1) 100%
    );
    /* background-image:linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%), url("images/banner-image.jpg"); */
    height: 85vh;
    background-size: cover;
  }
`;

export default Signup;
