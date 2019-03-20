import React, { Component } from "react";

class Customer extends Component {
  render() {
    return (
      <div>
        <CustomerProfile
          name={this.props.name}
          image={this.props.image}
          id={this.props.id}
        />
        <CustomerInfo
          date={this.props.date}
          gender={this.props.gender}
          occupation={this.props.occupation}
        />
      </div>
    );
  }
}
class CustomerProfile extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="Profile" />
        <h2>
          {this.props.name} ({this.props.id})
        </h2>
      </div>
    );
  }
}
class CustomerInfo extends Component {
  render() {
    return (
      <div>
        <p>{this.props.date}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.occupation}</p>
      </div>
    );
  }
}

export default Customer;
