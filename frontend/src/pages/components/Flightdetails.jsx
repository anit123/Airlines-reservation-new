import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

export class Flightdetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flightDetails: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/v1/flight").then((response) => {
      console.log(response);
    });
  }

  render() {
    return (
      <FlightdetailsWrapper>
        <div className="container-fluid">
          <table class="table mx-auto">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Departure</th>
                <th scope="col">Arrival</th>
                <th scope="col">Flight name </th>
                <th scope="col">Start Date</th>
                <th scope="col">Return Date</th>
                <th scope="col">One way / Two way</th>
                <th scope="col">Weight Allowed</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </FlightdetailsWrapper>
    );
  }
}

export default Flightdetails;

const FlightdetailsWrapper = styled.div`
  .table {
    width: 60%;
    margin-top: 5%;
  }
`;
