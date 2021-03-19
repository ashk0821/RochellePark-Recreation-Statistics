import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Sapp from "../Sapp";
import Tapp from "../Tapp";

function Home() {
  return (
    <>
      <HeroSection /> <br /> <br /> <br />
      <Tapp /> <br /> <br />
      <Sapp />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
