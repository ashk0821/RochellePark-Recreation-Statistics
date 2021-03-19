import React from "react";
import { Link } from "react-router-dom";

import Schedule from "./Schedule";

import "./Schedule.css";

class Sapp extends React.Component {
  render() {
    return (
      <div className="Sapp">
        <h1>
          <Link to="/league-schedules">Schedule</Link>
        </h1>
        <main>
          <Schedule />
        </main>
      </div>
    );
  }
}

export default Sapp;
