import React, { Component } from "react";
import styled from "styled-components";

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
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Ticket Status
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Flight Info
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Web Checkin
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Log in
                </a>
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
`;
