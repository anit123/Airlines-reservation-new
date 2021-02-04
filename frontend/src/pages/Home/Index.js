import React, { Component } from "react";
import Banner from "./component/Banner";
import WeeklyDeals from "./component/WeeklyDeals";

export class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <WeeklyDeals  />
      </div>
    );
  }
}

export default Home;
