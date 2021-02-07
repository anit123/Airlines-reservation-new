import React, { Component } from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/all";

class Login extends Component {
  render() {
    return (
      <LoginWrapper>
        {/* <section className="form my-4 mx-5">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-lg-5">
                <img src="images/login-image.jpg" class="img-fluid" alt="" />
              </div>
              <div className="col-lg-7 px-5 pt-5">
                <h1 class="font-weight-bold my-3">Flight Reservation</h1>
                <h4>Signin to your account</h4>
                <form>
                  <div className="form-row">
                    <div className="col-lg-7">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        my-3
                        p-4
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-lg-7">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-lg-7">
                      <button type="button" class="btn1">
                        Login
                      </button>
                    </div>
                  </div>
                  <a href="#">Forgot password</a>
                  <p>
                    Don't have account <a href="#">Register here</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section> */}

        <div class="container h-100">
          <div class="d-flex justify-content-center h-100">
            <div className="user-card">
              <img src="images/login-image.jpg" alt="" />
            </div>
            <div class="user_card">
              <div class="d-flex justify-content-center">
                <h1>Flight Reservation</h1>
              </div>
              <div class="d-flex justify-content-center form_container">
                <form>
                  <div class="input-group mb-3">
                    <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="fas fa-user"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name=""
                      class="form-control input_user"
                      value=""
                      placeholder="username"
                    />
                  </div>
                  <div class="input-group mb-2">
                    <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="fas fa-key"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      name=""
                      class="form-control input_pass"
                      value=""
                      placeholder="password"
                    />
                  </div>
                  <div class="form-group">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customControlInline"
                      />
                      <label
                        class="custom-control-label"
                        for="customControlInline"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center mt-3 login_container">
                    <button type="button" name="button" class="btn login_btn">
                      Login
                    </button>
                  </div>
                </form>
              </div>

              <div class="mt-4">
                <div class="d-flex justify-content-center links">
                  Don't have an account?{" "}
                  <a href="#" class="ml-2">
                    Sign Up
                  </a>
                </div>
                <div class="d-flex justify-content-center links">
                  <a href="#">Forgot your password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LoginWrapper>
    );
  }
}

const LoginWrapper = styled.div`
  .user_card {
    height: 400px;
    width: 350px;
    margin-top: 10%;
    margin-bottom: auto;
    background: white;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
  .brand_logo_container {
    position: absolute;
    height: 170px;
    width: 170px;
    top: -75px;
    border-radius: 50%;
    background: #60a3bc;
    padding: 10px;
    text-align: center;
  }
  .brand_logo {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 2px solid white;
  }
  .form_container {
    margin-top: 10%;
  }
  .login_btn {
    width: 100%;
    background: #4cafdd !important;
    color: white !important;
  }
  .login_btn:focus {
    box-shadow: none !important;
    outline: 0px !important;
  }
  .login_container {
    padding: 0 2rem;
  }
  .input-group-text {
    background: #4cafdd !important;
    color: white !important;
    border: 0 !important;
    border-radius: 0.25rem 0 0 0.25rem !important;
  }
  .input_user,
  .input_pass:focus {
    box-shadow: none !important;
    outline: 0px !important;
  }
  .custom-checkbox
    .custom-control-input:checked
    ~ .custom-control-label::before {
    background-color: #4cafdd !important;
  }
  h1 {
    font-size: x-large;
    font-weight: 700;
    color: #090979;
  }
  img {
    margin-top: 111px;
    height: 400px;
    margin-left: 6%;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    margin-right: 38px;
  }
`;

export default Login;

// .row {
//     border-radius: 30px;
//     background: white;
//   }
//   img {
//     border-top-left-radius: 30px;
//     border-bottom-left-radius: 30px;
//     margin-top: 30%;
//   }
//   input {
//     margin-top: 1px;
//     margin-bottom: -30px;
//     padding: 4px;
//   }
//   .col-lg-7 {
//     margin-top: 6%;
//   }
//   h1 {
//     color: #fff;
//   }
//   a {
//     color: white;
//     padding-top: 10px;
//     margin-top: 10%;
//   }
//   .btn1 {
//     width: 100%;
//     border: none;
//     outline: none;
//     height: 141%;
//     border-radius: 10px;
//     background: black;
//     color: white;
//   }
