import React, { useEffect, useState, Fragment } from "react";
import "./Cards.css";
//import CardItem from "./CardItem";
import { Link } from "react-router-dom";

function extract(src) {
  var final = src.slice(-11);
  return "https://www.youtube.com/embed/" + final;
}

function Cards() {
  return (
    <div className="cards">
      <h1>
        <Link to="/videos" className="h-link">
          Videos
        </Link>
      </h1>

      <div className="cards__container">
        <iframe
          className="vid"
          width="385"
          height="225"
          src={extract("https://www.youtube.com/watch?v=uRAp00SxP30")}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="vid"
          width="385"
          height="225"
          src={extract("https://www.youtube.com/watch?v=uRAp00SxP30")}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="vid"
          width="385"
          height="225"
          src={extract("https://www.youtube.com/watch?v=uRAp00SxP30")}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="vid"
          width="385"
          height="225"
          src={extract("https://www.youtube.com/watch?v=uRAp00SxP30")}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="vid"
          width="385"
          height="225"
          src={extract("https://www.youtube.com/watch?v=uRAp00SxP30")}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="vid"
          width="385"
          height="225"
          src={extract("https://www.youtube.com/watch?v=uRAp00SxP30")}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="vid"
          width="385"
          height="225"
          src={extract("https://www.youtube.com/watch?v=uRAp00SxP30")}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="vid"
          width="385"
          height="225"
          src={extract("https://www.youtube.com/watch?v=uRAp00SxP30")}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="vid"
          width="385"
          height="225"
          src={extract("https://www.youtube.com/watch?v=uRAp00SxP30")}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Cards;
