import React from "react";
import { Link } from "react-router-dom";

import Table from "./Table";
import "./Stats.css";

class Tapp extends React.Component {
  render() {
    return (
      <div class="googleSheets">
        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT_q-sqbf5XdxoCgUWZu250zdiD5eoN50risxUCGzdAHLQg3NM4iwLdmxf4X7zckEDG1-brO3D7vXaz/pubhtml?widget=true&amp;headers=false&chrome=false"></iframe>{" "}
      </div>
    );
  }
}

export default Tapp;
