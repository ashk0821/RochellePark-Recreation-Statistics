import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Sapp from "../Sapp";

function Home() {
  return (
    <>
      <HeroSection />
      <Sapp />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
