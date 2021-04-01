import React from "react";
import { Link } from "react-router-dom";

import Schedule from "./Schedule";
import "./Calendar.css";

class Sapp extends React.Component {
  render() {
    return (
      <div className="googleCalendar">
        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=YmI5NzdzYW84Z21pajRqbDZramYzM3Rka29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23C0CA33"></iframe>
      </div>
    );
  }
}

export default Sapp;
