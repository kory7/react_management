import React, { Component } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
class Customer extends Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.id}</TableCell>
        <TableCell>
          <img src={this.props.image} alt="Profile" />
        </TableCell>
        <TableCell>{this.props.name}</TableCell>
        <TableCell>{this.props.date}</TableCell>
        <TableCell>{this.props.gender}</TableCell>
        <TableCell>{this.props.occupation}</TableCell>
      </TableRow>
    );
  }
}

export default Customer;
