import React, { useState } from "react";
import { Route, withRouter } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import Home from "./layout/Home";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FlightDetails from "./layout/FlightDetails";

function App({ match }) {
  const [toggle, setToggle] = useState(false);
  function handleShowHide() {
    setToggle(!toggle);
  }
  return (
    <MainWrapper>
      <div
        className={
          toggle
            ? "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header"
            : "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header closed-sidebar"
        }
      >
        <Navbar showHide={handleShowHide} />
        <div className="app-main">
          <Sidebar />
          <div className="app-main__outer">
            <div className="app-main__inner">
              <div className="app-page-title">
                <Route path={`${match.path}`} exact component={Home} />
                <Route
                  exact
                  path={`${match.path}/flight-details`}
                  component={FlightDetails}
                />
                {/* <Route exact path={`${match.path}/courses`} component={Courses} />
                <Route exact path={`${match.path}/addCoursesImage`} component={AddImage} />
                <Route exact path={`${match.path}/addSchedule`} component={AddSchedule} />
                <Route exact path={`${match.path}/editCourse/:id`} component={EditCourse} />
                <Route exact path={`${match.path}/events`} component={EventDashboard} />
                <Route exact path={`${match.path}/addEvents`} component={EventForm} />
                <Route exact path={`${match.path}/editEvent/:id`} component={EditEvent} />
                <Route exact path={`${match.path}/booking`} component={BookingCourse} />
                <Route exact path={`${match.path}/filterbooking`} component={BookingCourseFilter} />
                <Route exact path={`${match.path}/slider`} component={SliderDashboard} />
                <Route exact path={`${match.path}/addSlider`} component={AddSliderDashboard} />
                <Route exact path={`${match.path}/contact`} component={ContactDashboard} />
                <Route exact path={`${match.path}/blog`} component={BlogDashboard} />
                <Route exact path={`${match.path}/addBlog`} component={AddBlog} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
}
const MainWrapper = styled.div`
  font-size: 16px;
  .app-main {
    padding-top: 70px !important;
  }
`;

export default withRouter(App);
