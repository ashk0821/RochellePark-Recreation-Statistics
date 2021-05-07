import React, { Component } from "react";
import Cards from "./Cards";

class DataParser extends Component {
  constructor(props) {
    super(props);
    this.updateData = this.updateData.bind(this);
  }

  componentWillMount() {
    var Papa = require("papaparse/papaparse.min.js");
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSzZ9NDEJ33DuXd09ihvoM1z7gDoOf7PLY2oK7Em9Ev6zIjCXn9KDTgb_W-K0XsqcVb5BqB3mNBehID/pub?output=csv",
      {
        header: true,
        download: true,
        complete: this.updateData,
      }
    );
  }

  updateData(result) {
    const data = result.data;
    console.log(data[0].name);

    this.setState({ data: data });
  }

  render() {
    return (
      <div>
        <Cards sample={this.data} />
      </div>
    );
  }
}

export default DataParser;
