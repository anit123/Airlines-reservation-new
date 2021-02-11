import React, { Component } from "react";
import styled from "styled-components";
import {
  FaPlaneArrival,
  FaPlaneDeparture,
  FaChild,
  VscPerson,
  BsSearch,
} from "react-icons/all";
import Stepprocess from "../Home/component/Stepprocess";

class Flightinfo extends Component {
  render() {
    return (
      <Infowrapper>
        <div className="flightdetails">
          <div className="buttonwrapper">
            <button className="btn btn-primary">Two Way</button>
            <button className="btn btn-primary ml-3">One Way</button>
          </div>
          <form class="form-inline">
            <div class="col-auto">
              <label class="sr-only" for="inlineFormInputGroup">
                Departure
              </label>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <FaPlaneDeparture />
                  </div>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="inlineFormInputGroup"
                  placeholder="Departure"
                />
              </div>
            </div>

            <div class="col-auto">
              <label class="sr-only" for="inlineFormInputGroup">
                Arrival
              </label>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <FaPlaneArrival />
                  </div>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="inlineFormInputGroup"
                  placeholder="Arrival"
                />
              </div>
            </div>
            <div class="col-auto">
              <label class="sr-only" for="inlineFormInputGroup">
                Dep Date
              </label>
              <div class="input-group mb-2">
                <div class="input-group-prepend"></div>
                <input
                  type="date"
                  class="form-control"
                  id="inlineFormInputGroup"
                  placeholder="Dep Date"
                />
              </div>
            </div>

            <div class="col-auto">
              <label class="sr-only" for="inlineFormInputGroup">
                Return Date
              </label>
              <div class="input-group mb-2">
                <div class="input-group-prepend"></div>
                <input
                  type="date"
                  class="form-control"
                  id="inlineFormInputGroup"
                  placeholder="Return Date"
                />
              </div>
            </div>

            <div class="col-auto">
              <label class="sr-only" for="inlineFormInputGroup">
                Username
              </label>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <FaChild />
                  </div>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="inlineFormInputGroup"
                  placeholder="Child"
                />
              </div>
            </div>

            <div class="col-auto">
              <label class="sr-only" for="inlineFormInputGroup">
                Username
              </label>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <VscPerson />
                  </div>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="inlineFormInputGroup"
                  placeholder="Adult"
                />
              </div>
            </div>

            <div className="col-auto">
              <button
                type="submit"
                className="btn btn-primary search "
                onclick="update($(this));"
              >
                <i class="fa fa-arrow-circle-o-up" aria-hidden="true">
                  <BsSearch />
                </i>
              </button>
            </div>
          </form>
        </div>
        <Stepprocess />
      </Infowrapper>
    );
  }
}

export default Flightinfo;
const Infowrapper = styled.div`
  .flightdetails {
    background-image: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 0%,
      rgba(0, 212, 255, 1) 100%
    );
    /* background-image:linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%), url("images/banner-image.jpg"); */
    height: 15vh;
    background-size: cover;

 
    }
    .form-inline{
        margin-left: 12%;
        margin-top: 7px;
    }
    .search{
        margin-top: -7px;
        background: white;
        color: black;
    }
    .buttonwrapper{
        margin-left: 12%;
        padding-top: 10px;
    }
  }
`;
