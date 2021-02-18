import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { baseURl } from "../../constants/apiContact";
import { Link } from "react-router-dom";
import moment from "moment";
export class Flightdetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flightDetails: [],
    };
  }

  componentDidMount() {
    axios.get(`${baseURl}api/v1/flight`).then((response) => {
      console.log(response);
      this.setState({ flightDetails: response.data.data.data });
    });
  }

  render() {
    return (
      <FlightdetailsWrapper>
        <div className="container">
          <table class="table mx-auto">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Departure</th>
                <th scope="col">Arrival</th>
                <th scope="col">Flight name </th>
                <th scope="col">Start Date</th>
                <th scope="col">Return Date</th>
                <th>One way / Two way</th>
                <th scope="col">Weight </th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.flightDetails?.map((content) => {
                return (
                  <tr>
                    <td>{content.from}</td>
                    <td>{content.to}</td>
                    <td>{content.name}</td>
                    <td>{moment(content.startDate).format("MMM Do YY")}</td>
                    <td>{moment(content.endingDate).format("MMM Do YY")}</td>
                    <td>{content.isInbound && "true"}</td>
                    <td>{content.weight}</td>
                    <td>
                      {" "}
                      <Link
                        to={`/bookingDetails/${content._id}`}
                        className="btn btn-sm btn-success"
                      >
                        Book
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </FlightdetailsWrapper>
    );
  }
}

export default Flightdetails;

const FlightdetailsWrapper = styled.div`
  margin-top: 130px;
  .table {
    /* width: 60%; */
    /* margin-top: 5%; */
  }
`;
