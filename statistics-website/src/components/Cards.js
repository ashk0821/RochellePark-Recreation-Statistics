import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="cards">
      <h1>
        {" "}
        <Link to="/videos">Videos</Link>
      </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://i.ytimg.com/an_webp/uRAp00SxP30/mqdefault_6s.webp?du=3000&sqp=CLGS7oAG&rs=AOn4CLBCG8H1UW-ZNV-htZvZsZCiP-uvqw"
              text="Derrick Rose Dunks - What are you doing Dragic?"
              label="Dunk"
              url="https://www.youtube.com/watch?v=uRAp00SxP30"
            />
            <CardItem
              src="https://i.ytimg.com/an_webp/CqzGJMv-TmA/mqdefault_6s.webp?du=3000&sqp=CICm7oAG&rs=AOn4CLBfIz2alPYwbzFKooN2z2zeo__jTA"
              text="Donovan Mitchell Sends Nerlens Noel to the Floor With NASTY Crossover"
              label="Ankle Breaker"
              url="https://www.youtube.com/watch?v=CqzGJMv-TmA"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://i.ytimg.com/an_webp/5xvxWEx0sK8/mqdefault_6s.webp?du=3000&sqp=CJa87oAG&rs=AOn4CLDf0hZ0OgFIhTcb-uEG1T8WGfu9kQ"
              text="Jeremy Lamb UNBELIEVABLE GAME-WINNER, SHOCKS THE WORLD | Hornets vs Raptors - March 24, 2019"
              label="Game Winner"
              url="https://www.youtube.com/watch?v=5xvxWEx0sK8"
            />
            <CardItem
              src="https://i.ytimg.com/an_webp/e8KycyU47rs/mqdefault_6s.webp?du=3000&sqp=CMSZ7oAG&rs=AOn4CLCEedO-x5szkWeXCqMmtd-l3HnLlA"
              text="Hakeem Olajuwon DESTROYS MVP Robinson! Full Game 6 Highlights vs Spurs 1995 WCF - EPIC!"
              label="Highlights"
              url="https://www.youtube.com/watch?v=e8KycyU47rs"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
