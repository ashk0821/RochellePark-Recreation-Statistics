import React, { useEffect, useState, Fragment } from "react";
import "./Cards.css";
import { Link } from "react-router-dom";
//import Tabletop from "tabletop";
import Papa from "papaparse";

function extract(src) {
  var final = src.slice(-11);
  return "https://www.youtube.com/embed/" + final;
}

function Cards(props) {
  //  const Papa = require("papaparse");
  console.log(props);
  const fetch = require("node-fetch");

  //  const [data, setData] = useState([]);
  /*
  function componentWillMount() {
    // Your parse code, but not seperated in a function
    var Papa = require("papaparse");
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSzZ9NDEJ33DuXd09ihvoM1z7gDoOf7PLY2oK7Em9Ev6zIjCXn9KDTgb_W-K0XsqcVb5BqB3mNBehID/pub?output=csv",
      {
        header: true,
        download: true,
        skipEmptyLines: true,
        // Here this is also available. So we can call our custom class method
        complete: this.getData,
      }
    );
  }

  function getData(result) {
    console.log(result); // displays whole data
    this.setState({data: result}); // but gets error here
  }.bind(this)

  componentWillMount();
  /*
  async function fetchSheet({ spreadsheetId, sheetName, apiKey, complete }) {
    let url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;
    return await fetch(url).then((response) =>
      response.json().then((result) => {
        let data = Papa.parse(Papa.unparse(result.values), { header: true });
        complete(data);
        console.log(data);
      })
    );
  }

  useEffect(() => {
    fetchSheet({
      spreadsheetId: "1KGfMxWw54q_tN-22SlaQpamz8jrrWj0K77Sash81WHU",
      sheetName: "Sheet1",
      apiKey: "AIzaSyAY2Aau_KglJjDxRsRpdua6kIDPH3Lcvkc",
      complete: (results) => setData(results.data),
    });
  }, []);

  /*  const [data, setData] = useState([]);
  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSzZ9NDEJ33DuXd09ihvoM1z7gDoOf7PLY2oK7Em9Ev6zIjCXn9KDTgb_W-K0XsqcVb5BqB3mNBehID/pub?output=csv",
      {
        download: true, // use this option to interpret the input string as a URL from which to download the input file.
        complete: (results) => setData(results.data),
      }
    );
  }, []);
  console.log(data);
  
  function parseData() {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSzZ9NDEJ33DuXd09ihvoM1z7gDoOf7PLY2oK7Em9Ev6zIjCXn9KDTgb_W-K0XsqcVb5BqB3mNBehID/pub?output=csv",
      {
        download: true,
        dynamicTyping: true,
        complete: function (results) {
          console.log(results.data[1][0]);
        },
      }
    );
  }
  parseData();
  /*const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1KGfMxWw54q_tN-22SlaQpamz8jrrWj0K77Sash81WHU",
      simpleSheet: true,
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);
*/
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
          //src={extract(props.sample[0].name)}
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
