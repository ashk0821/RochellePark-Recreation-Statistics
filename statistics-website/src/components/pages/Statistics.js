import React from "react";
import "../../App.css";
import Tapp from "../Tapp";
import "./Stats.css";
import Footer from "../Footer";

function Statistics() {
  return (
    <>
      <div class="googleSheets">
        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRLOG-IyUr4ygprYfQ0yraum8NXqaSIwdLAHaVS09NuOeXPapuB_LSfolU5148T2eLxmqHX6TsM45S_/pubhtml?widget=true&amp;headers=false"></iframe>
      </div>
      <Footer />
    </>
  );
}

export default Statistics;
