import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/layout/Dashboard";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Navbar />
          <div className="container">
            <Dashboard />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
