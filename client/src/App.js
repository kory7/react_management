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
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class App extends Component {
  state = {
    customer: "",
    completed: 0
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({ customer: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/customers");
    const body = await response.json();
    return body;
  };

  progress = () => {
    const { completed } = this.state;
    this.setState({
      completed: completed >= 100 ? 0 : completed + 1
    });
  };
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
            {this.state.customer ? (
              this.state.customer.map(c => {
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
              })
            ) : (
              <TableRow>
                <TableCell colspan="6" align="center">
                  <CircularProgress
                    className={classes.progress}
                    variant="determinate"
                    value={this.state.completed}
                  />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
