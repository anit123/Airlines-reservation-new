import React, { Component } from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/all";

export class Flightsearch extends Component {
  render() {
    return (
      <FlightSearWrapper>
        <div className="card ">
          <div className="card-body">
            <div id="outer">
              <div class="inner">
                <a href="">Round Trip</a>
                <span>/</span>
              </div>
              <div class="inner">
                <a href="">One Way</a>
              </div>
            </div>
            <form>
              <div class="form-row">
                <div className="col-md-6">
                  <div class="form-group ">
                    <label htmlFor="from">From</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="From"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="form-group labelTo">
                    <label for="inputPassword4">To</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Destination"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="form-group ">
                    <label htmlFor="from">Departure</label>
                    <input
                      type="date"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Departure"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="form-group ">
                    <label for="inputPassword4">Return</label>
                    <input
                      type="date"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Return"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <button type="submit" class="btn btn-primary myButton">
                  Search Now
                  <BsArrowRight />
                </button>
              </div>
            </form>
          </div>
        </div>
      </FlightSearWrapper>
    );
  }
}

const FlightSearWrapper = styled.div`
  /* margin-top:150px; */
  border: none !important;
  border-radius: 10px;
  .myButton {
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
    box-shadow: rgb(0 0 0 / 7%) 0px 0px 40px;
  }
  #outer {
    width: 100%;
    text-align: center;
    padding: 6px;
    border: 1px solid;
    border-radius: 5px;
    outline: none;
    color: #2632be;
    font-weight: 600;
    :hover {
      background-color: #2632be;
      a {
        color: white;
      }
    }
  }
  .inner {
    display: inline-block;
  }
  a {
    padding: 10px;
  }
`;

export default Flightsearch;
