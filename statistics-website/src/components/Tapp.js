import React from "react";
import { Link } from "react-router-dom";

import Table from "./Table";
import "./Stats.css";

class Tapp extends React.Component {
  render() {
    return (
      <div class="googleSheets">
        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRLOG-IyUr4ygprYfQ0yraum8NXqaSIwdLAHaVS09NuOeXPapuB_LSfolU5148T2eLxmqHX6TsM45S_/pubhtml?widget=true&amp;headers=false"></iframe>
      </div>
    );
  }
}

export default Tapp;
