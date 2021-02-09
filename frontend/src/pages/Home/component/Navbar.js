import React, { Component } from "react";
import styled from "styled-components";
import Login from "../../Sign-up/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Index";

export class Navbar extends Component {
  render() {
    return (
      <Navwrapper>
        <div className="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#">
              Flight Reservation
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <Link to="/" class="nav-link" href="#">
                    Home <span class="sr-only">(current)</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="#">
                    Ticket Status
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="#">
                    Flight Info
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" href="#">
                    Web Checkin
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/login" class="nav-link" href="#">
                    Log in
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </Navwrapper>
    );
  }
}

export default Navbar;

const Navwrapper = styled.div`
  font-family: "Poppins", sans-serif;
  border-bottom: 1px solid rgb(255 255 255 / 50%);
  .navbar .nav-item .nav-link,
  .navbar-brand {
    color: white !important;
  }
  .navbar-brand {
    font-weight: 800;
    margin-right: 10px;
  }
  background-image: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
`;
