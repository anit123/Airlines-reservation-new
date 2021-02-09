import React, { Component } from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/all";

class Signup extends Component {
  render() {
    return (
      <SignupWrapper>
        <div className="card ">
          <div className="card-body">
            <h5>Register for sign in</h5>
            <form>
              <div class="form-row">
                <div className="col-md-6">
                  <div class="form-group ">
                    <label htmlFor="from">Username</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Username"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="form-group ">
                    <label for="inputPassword4">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="form-group ">
                    <label htmlFor="from">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="form-group ">
                    <label htmlFor="from">Confirm Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Password"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <button type="submit" class="btn btn-primary">
                  Submit
                  <BsArrowRight />
                </button>
              </div>
            </form>
          </div>
        </div>
      </SignupWrapper>
    );
  }
}

const SignupWrapper = styled.div`
  /* margin-top:150px; */
  border: none !important;
  button {
    background-color: #2632be !important;
    padding: 10px 70px;
    border-radius: 10px;
    box-sizing: border-box;
    svg {
      font-size: 25px;
      margin-left: 10px;
    }
  }
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 35%;
    margin: auto;
  }

  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  /* Add some padding inside the card container */
  .container {
    padding: 2px 16px;
  }
  background-image: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  h5 {
    margin-left: 33%;
    padding: 37px;
  }
  /* background-image:linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%), url("images/banner-image.jpg"); */
  height: 85vh;
  background-size: cover;
  padding-top: 10%;
`;

export default Signup;
