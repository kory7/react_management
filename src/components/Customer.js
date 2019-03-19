import React, { Component } from "react";

class Customer extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.date}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.occupation}</p>
      </div>
    );
  }
}

export default Customer;
