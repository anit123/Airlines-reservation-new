import React, { Component } from "react";

export class Flightsearch extends Component {
  render() {
    return (
      <div className="card shadow mb-2 bg-blue rounder">
        <div className="card-body">
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                />
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Flightsearch;
