import React, { Component } from "react";
import Customer from "./components/Customer";
import "./App.css";
const customer = {
  name: "Luis Perez",
  date: "940102",
  gender: "masculino",
  occupation: "student"
};
class App extends Component {
  render() {
    return (
      <Customer
        name={customer.name}
        date={customer.date}
        gender={customer.gender}
        occupation={customer.occupation}
      />
    );
  }
}

export default App;
