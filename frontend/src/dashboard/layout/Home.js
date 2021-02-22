import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Row, Col, Spinner } from "react-bootstrap";

function Home({}) {
  useEffect(() => {}, []);

  // if (loading) {
  //   return <Spinner animated="border" />;
  // }

  return (
    <div>
      <HomeWrapper>
        <div className="card">
          <h1 className="text-capitalize text-center">
            Welcome to the Dashboard
          </h1>
          <div className="card-body">
            <Row>
              <Col md="4">
                Number of Events:
                <br />
                {/* {events.results} */}
              </Col>
              <Col md="4">
                Number of new Booking:
                <br />
                {/* {booking.results} */}
              </Col>
              <Col md="4">
                Number of courses:
                <br />
                {/* {courses.results} */}
              </Col>
            </Row>
          </div>
        </div>
      </HomeWrapper>
    </div>
  );
}

const mapStateToProps = (state) => ({
  allData: state,
});

export default connect(mapStateToProps, {})(Home);
const HomeWrapper = styled.section`
  .card {
    padding: 40px 0;
  }
  .col-md-4 {
    text-align: center;
    margin-top: 100px;
  }
`;
