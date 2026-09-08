import React, { Component } from "react";

export default class Car extends Component {
  //js code

  constructor() {
    super();

    this.state = {
      carName: "Polo GT",
    };
  }

  Update(name) {
    this.setState({ carName: name });
  }
  render() {
    return (
      <>
        <div className="m-5">
          <input
            className="form-control"
            type="text"
            placeholder="Enter car name"
            onChange={(e) => this.Update(e.target.value)}
          />
        </div>
        <div className="p-5 bg-primary text-danger fs-3 fw-bold">
          <p> Car Name : {this.state.carName}</p>
        </div>
      </>
    );
  }
}
