import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Sapp from "../Sapp";
import Tapp from "../Tapp";
import "./Stats.css";
import { Link } from "react-router-dom";
import Sample from "../Sample";

function Home() {
  return (
    <>
      <HeroSection />
      <h1>
        {" "}
        <Link to="/league-schedules" className="h-link">
          Schedules
        </Link>
      </h1>
      <Sapp /> <br /> <br />
      <h1>
        {" "}
        <Link to="/statistics" className="h-link">
          Statistics
        </Link>
      </h1>
      <Tapp />
      <Sample />
      <Footer />
    </>
  );
}

export default Home;
