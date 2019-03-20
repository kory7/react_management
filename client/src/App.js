import React, { Component } from "react";
import Customer from "./components/Customer";
import "./App.css";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
});

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
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
