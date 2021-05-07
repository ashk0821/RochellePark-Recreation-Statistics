import React from "react";
import "../../App.css";
import Tapp from "../Tapp";
import "./Stats.css";
import Footer from "../Footer";

function Statistics() {
  return (
    <>
      <div class="googleSheets">
        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT_q-sqbf5XdxoCgUWZu250zdiD5eoN50risxUCGzdAHLQg3NM4iwLdmxf4X7zckEDG1-brO3D7vXaz/pubhtml?widget=true&amp;headers=false&chrome=false"></iframe>{" "}
      </div>
      <Footer />
    </>
  );
}

export default Statistics;
