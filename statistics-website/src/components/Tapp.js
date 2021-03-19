import React from "react";
import { Link } from "react-router-dom";

import Table from "./Table";

class Tapp extends React.Component {
  render() {
    return (
      <div className="Tapp">
        <h1>
          <Link to="/statistics">Statistics</Link>
        </h1>
        <main>
          <Table />
        </main>
      </div>
    );
  }
}

export default Tapp;
