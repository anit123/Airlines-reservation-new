import React, { Component } from "react";
import styled from "styled-components";
import Flightsearch from "./Flightsearch";
import Navbar from "./Navbar";

class Banner extends Component {
  render() {
    return (
      <BannerWraper>
        <div className="container">
          <Navbar />
          <Flightsearch />
        </div>
      </BannerWraper>
    );
  }
}

export default Banner;

const BannerWraper = styled.section`
  background-image: url("images/banner-image.jpg");
  height: 85vh;
  background-size: cover;
`;
