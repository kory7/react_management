import React, { Component } from "react";
import Customer from "./components/Customer";
import "./App.css";
const customer = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "Luis Perez",
    date: "940102",
    gender: "masculino",
    occupation: "student"
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "Jung Ik",
    date: "990102",
    gender: "masculino",
    occupation: "student"
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "Hugo",
    date: "930102",
    gender: "masculino",
    occupation: "student"
  }
];
class App extends Component {
  render() {
    return (
      <div>
        {customer.map(c => {
          return (
            <Customer
              id={c.id}
              name={c.name}
              image={c.image}
              date={c.date}
              gender={c.gender}
              occupation={c.occupation}
              key={c.id}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
