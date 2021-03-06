import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

// Components
import { Nav } from "./Nav";
import { TripsCount } from "./trips/TripsCount";
import { AddTrip } from "./trips/AddTrip";
import { TripsList } from "./trips/TripsList";
import { Error404 } from "./Error404";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTrips: [],
    };
    this.addTrip = this.addTrip.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:8080/api/trips").then((res) => {
      this.setState({
        allTrips: res.data.trips,
      });
    });
  }

  addTrip(newTrip) {
    axios
      .post("http://localhost:8080/api/trips", {
        ...newTrip,
      })
      .then((res) => {
        this.setState((prevState) => {
          return {
            allTrips: [...prevState.allTrips, newTrip],
          };
        });
      });
  }

  countDays(filter) {
    const { allTrips } = this.state;
    return allTrips.filter((trip) => (filter ? trip.category === filter : trip))
      .length;
  }

  // Switch goes to first matching route
  render() {
    return (
      <div className="app">
        <Router>
          <div className="route-container">
            <Nav handleLogout={this.props.handleLogout} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <TripsCount
                    {...props}
                    total={this.countDays()}
                    trek={this.countDays("Trek")}
                    tropic={this.countDays("Tropic")}
                    club={this.countDays("Club")}
                  />
                )}
              ></Route>
              <Route
                path="/list/:filter"
                render={(props) => (
                  <TripsList {...props} days={this.state.allTrips} />
                )}
              />
              <Route
                path="/list"
                render={(props) => (
                  <TripsList {...props} days={this.state.allTrips} />
                )}
              />
              <Route
                path="/add"
                render={(props) => (
                  <AddTrip {...props} newTrip={this.addTrip} />
                )}
              />
              <Route component={Error404} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
