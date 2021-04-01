import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Sapp from "../Sapp";
import Tapp from "../Tapp";
import "./Stats.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <HeroSection /> <br /> <br />
      <h1>
        {" "}
        <Link to="/league-schedules">Schedules</Link>
      </h1>
      <Sapp /> <br /> <br /> <br />
      <h1>
        {" "}
        <Link to="/statistics">Statistics</Link>
      </h1>
      <Tapp />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
